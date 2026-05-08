import logo from "@/assets/provinear-logo.png";

const sizes = {
  sm: { height: 20, className: "h-5" },
  md: { height: 26, className: "h-6.5" },
  lg: { height: 36, className: "h-9" },
};

interface WordmarkProps {
  size?: keyof typeof sizes;
  className?: string;
}

export function Wordmark({ size = "md", className = "" }: WordmarkProps) {
  const { height, className: sizeClass } = sizes[size];
  return (
    <img
      src={logo}
      alt="Provinear"
      height={height}
      className={`${sizeClass} w-auto object-contain ${className}`}
      draggable={false}
    />
  );
}
