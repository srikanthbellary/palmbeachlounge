type FourPointStarProps = {
  className?: string;
  size?: number;
};

export function FourPointStar({
  className = "text-copper",
  size = 10,
}: FourPointStarProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 0.8 L13.28 10.05 L23.2 12 L13.28 13.95 L12 23.2 L10.72 13.95 L0.8 12 L10.72 10.05 Z"
      />
    </svg>
  );
}
