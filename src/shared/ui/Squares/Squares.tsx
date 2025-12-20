"use client";
import React, { useRef, useEffect, useState } from "react";

interface SquaresProps {
  direction?: "diagonal" | "up" | "down" | "left" | "right";
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
  className?: string;
}

const Squares: React.FC<SquaresProps> = ({
  direction = "right",
  speed = 0.5,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(null);
  const numSquaresX = useRef<number>(0);
  const numSquaresY = useRef<number>(0);
  const gridOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredSquare, setHoveredSquare] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      ctx.lineWidth = 0.5;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          if (borderColor) {
            ctx.strokeStyle = borderColor;
            ctx.strokeRect(squareX, squareY, squareSize, squareSize);
          }

          if (hoveredSquare) {
            const drawX = Math.floor(
              (squareX + (gridOffset.current.x % squareSize)) / squareSize
            );
            const drawY = Math.floor(
              (squareY + (gridOffset.current.y % squareSize)) / squareSize
            );

            if (drawX === hoveredSquare.x && drawY === hoveredSquare.y) {
              ctx.fillStyle = hoverFillColor;
              ctx.fillRect(squareX, squareY, squareSize, squareSize);
            }
          }
        }
      }

      const gradientSpeed = speed;
      if (direction === "right") gridOffset.current.x -= gradientSpeed;
      if (direction === "left") gridOffset.current.x += gradientSpeed;
      if (direction === "down") gridOffset.current.y -= gradientSpeed;
      if (direction === "up") gridOffset.current.y += gradientSpeed;
      if (direction === "diagonal") {
        gridOffset.current.x -= gradientSpeed;
        gridOffset.current.y -= gradientSpeed;
      }

      requestRef.current = requestAnimationFrame(drawGrid);
    };

    requestRef.current = requestAnimationFrame(drawGrid);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [
    direction,
    speed,
    borderColor,
    hoverFillColor,
    hoveredSquare,
    squareSize,
  ]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const gridX = Math.floor(
      (x + (gridOffset.current.x % squareSize)) / squareSize
    );
    const gridY = Math.floor(
      (y + (gridOffset.current.y % squareSize)) / squareSize
    );

    setHoveredSquare({ x: gridX, y: gridY });
  };

  const handleMouseLeave = () => {
    setHoveredSquare(null);
  };

  return (
    <div
      className={`w-full h-full ${className} mask-[radial-gradient(circle_at_center,black_15%,transparent_95%)]`}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full border-none outline-none select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Squares;
