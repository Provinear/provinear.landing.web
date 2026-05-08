import mark from "@/assets/provinear-mark.png";
import { cn } from "@/lib/utils";

interface BrandPinProps {
  size?: number;
  rotate?: number;
  float?: boolean;
  glow?: boolean;
  className?: string;
}

export function BrandPin({
  size = 24,
  rotate = 0,
  float = false,
  glow = false,
  className,
}: BrandPinProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center shrink-0",
        float && "animate-float-y",
        className,
      )}
      style={{
        width: size,
        height: size,
        transform: rotate !== 0 ? `rotate(${rotate}deg)` : undefined,
      }}
      aria-hidden
    >
      {glow && (
        <span
          className="absolute rounded-full bg-primary/30 blur-md pointer-events-none"
          style={{ width: size * 1.6, height: size * 1.6 }}
        />
      )}
      <img
        src={mark}
        alt=""
        width={size}
        height={size}
        className="relative w-full h-full object-contain"
        draggable={false}
      />
    </span>
  );
}
