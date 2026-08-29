import { cn } from "@/lib/utils";
import { useState } from "react";

/**
 * Soft Yellow Glow Backdrop
 * Provides a warm, inviting radial gradient overlay.
 */
export const SoftYellowBackground = ({ children, className }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("min-h-screen w-full relative bg-white overflow-hidden", className)}>
      {/* Soft Yellow Glow */}
      <div
        className="absolute inset-0 z-0 soma-yellow-glow"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

/**
 * Cool Blue Glow Backdrop
 * Provides a modern, premium radial gradient overlay with a blue tint.
 */
export const CoolBlueBackground = ({ children, className }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("min-h-screen w-full relative bg-white overflow-hidden", className)}>
      {/* Cool Blue Glow Right */}
      <div
        className="absolute inset-0 z-0 soma-blue-glow"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

/**
 * Warm Orange Glow Backdrop
 * Provides a warm, sunset-like radial gradient overlay.
 */
export const WarmOrangeBackground = ({ children, className }) => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("min-h-screen w-full relative bg-white overflow-hidden", className)}>
      {/* Warm Orange Glow Right */}
      <div
        className="absolute inset-0 z-0 soma-orange-glow"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default WarmOrangeBackground;
