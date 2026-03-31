import { useRef, useEffect, useCallback } from "react";

// Characters ordered by visual density (sparse → dense)
const CHARS = [" ", " ", ".", "·", ":", "∙", "░", "▒"];

// Simple layered-sine noise — no library needed at this opacity
function noise(x: number, y: number, t: number): number {
  const v =
    Math.sin(x * 0.15 + t * 0.4) * Math.cos(y * 0.12 + t * 0.3) * 0.5 +
    Math.sin(x * 0.08 - y * 0.06 + t * 0.2) * 0.3 +
    Math.cos(x * 0.05 + y * 0.1 + t * 0.15) * 0.2;
  // Normalize to 0–1
  return (v + 1) / 2;
}

const CELL_SIZE = 14; // px per character cell
const TARGET_FPS = 8;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

export function AsciiDither({ opacity = 0.06 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const lastFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Resize canvas to match container
    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    }

    // Read theme color
    const fg = getComputedStyle(container).getPropertyValue("color") || "#000";

    ctx.clearRect(0, 0, width, height);
    ctx.font = `${CELL_SIZE - 2}px monospace`;
    ctx.fillStyle = fg;
    ctx.textBaseline = "top";

    const cols = Math.ceil(width / CELL_SIZE);
    const rows = Math.ceil(height / CELL_SIZE);
    const t = timeRef.current;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const n = noise(col, row, t);
        const idx = Math.floor(n * (CHARS.length - 1));
        const ch = CHARS[idx];
        if (ch !== " ") {
          ctx.fillText(ch, col * CELL_SIZE, row * CELL_SIZE);
        }
      }
    }
  }, []);

  useEffect(() => {
    const loop = (now: number) => {
      animRef.current = requestAnimationFrame(loop);

      const delta = now - lastFrameRef.current;
      if (delta < FRAME_INTERVAL) return;

      lastFrameRef.current = now - (delta % FRAME_INTERVAL);
      timeRef.current += 0.012; // Very slow time advance
      draw();
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  // Resize handling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver(() => draw());
    ro.observe(container);
    return () => ro.disconnect();
  }, [draw]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden text-(--foreground)"
      style={{ opacity }}
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
