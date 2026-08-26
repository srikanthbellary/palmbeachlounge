import { FourPointStar } from "@/components/craft/FourPointStar";

type RuleProps = {
  className?: string;
};

export function Rule({ className = "" }: RuleProps) {
  return (
    <div
      className={`mx-auto flex w-full max-w-xs items-center gap-3 ${className}`}
      aria-hidden
    >
      <span className="flex flex-1 flex-col gap-[3px]">
        <span className="h-px bg-copper/55" />
        <span className="h-px bg-copper/22" />
      </span>
      <FourPointStar className="text-copper" size={9} />
      <span className="flex flex-1 flex-col gap-[3px]">
        <span className="h-px bg-copper/55" />
        <span className="h-px bg-copper/22" />
      </span>
    </div>
  );
}
