type RuleProps = {
  className?: string;
};

export function Rule({ className = "" }: RuleProps) {
  return (
    <div
      className={`mx-auto flex w-full max-w-xs items-center gap-3 ${className}`}
      aria-hidden
    >
      <span className="h-px flex-1 bg-copper/55" />
      <span className="inline-block h-1.5 w-1.5 rotate-45 bg-copper" />
      <span className="h-px flex-1 bg-copper/55" />
    </div>
  );
}
