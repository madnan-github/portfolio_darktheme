"use client";
import React from "react";
import { useEffect, useRef } from "react";

export const BackgroundBeams = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const beams = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 200 + 100,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.5 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      beams.forEach((beam) => {
        ctx.beginPath();
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length
        );
        ctx.stroke();

        beam.x += Math.cos(beam.angle) * beam.speed;
        beam.y += Math.sin(beam.angle) * beam.speed;

        if (
          beam.x < 0 ||
          beam.x > canvas.width ||
          beam.y < 0 ||
          beam.y > canvas.height
        ) {
          beam.x = Math.random() * canvas.width;
          beam.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

