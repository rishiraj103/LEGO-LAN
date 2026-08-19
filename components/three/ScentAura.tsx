"use client";

import { useEffect, useRef } from "react";

export default function ScentAura() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
        powerPreference: "high-performance",
      }) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) return;

    let animationFrameId: number;
    let isRunning = true;

    function updateSize() {
      if (!canvas) return;
      const w = Math.min(window.innerWidth || 1280, 1440);
      const h = Math.min(window.innerHeight || 720, 900);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    updateSize();
    window.addEventListener("resize", updateSize, { passive: true });

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
          vec2 uv = v_texCoord;
          vec2 mouse = u_mouse / max(u_resolution, vec2(1.0, 1.0));
          
          float dist = distance(uv, mouse);
          float pulse = 0.5 + 0.5 * sin(u_time * 0.3);
          
          vec3 ivory = vec3(0.98, 0.97, 0.96);
          
          float n = sin(uv.x * 2.5 + u_time * 0.2) * cos(uv.y * 3.5 - u_time * 0.15);
          vec3 baseColor = mix(ivory, vec3(0.92, 0.90, 0.88), uv.y + n * 0.05);
          
          vec3 accent = vec3(0.95, 0.85, 0.7) * (1.0 - clamp(dist, 0.0, 1.0)) * 0.1;
          
          vec3 finalColor = mix(baseColor, ivory + accent, (1.0 - clamp(dist, 0.0, 1.0)) * 0.15 * pulse);
          
          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function createShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        gl.deleteShader(s);
        return null;
      }
      return s;
    }

    const vertShader = createShader(gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const prog = gl.createProgram();
    if (!prog) return;

    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);

    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      return;
    }

    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      targetX: canvas.width / 2,
      targetY: canvas.height / 2,
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const nx = event.clientX / window.innerWidth;
      const ny = 1.0 - event.clientY / window.innerHeight;
      mouse.targetX = nx * canvas.width;
      mouse.targetY = ny * canvas.height;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    function render(t: number) {
      if (!isRunning || !gl || !canvas) return;

      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("mousemove", handleMouseMove);

      if (gl) {
        gl.deleteBuffer(buf);
        gl.deleteProgram(prog);
        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[-1] pointer-events-none w-full h-full transform-gpu"
      style={{ willChange: "transform" }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        aria-hidden="true"
      />
    </div>
  );
}

