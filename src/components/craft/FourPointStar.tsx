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
        d="M12 0.6 L14.15 9.7 L23.4 12 L14.15 14.3 L12 23.4 L9.85 14.3 L0.6 12 L9.85 9.7 Z"
      />
    </svg>
  );
}
