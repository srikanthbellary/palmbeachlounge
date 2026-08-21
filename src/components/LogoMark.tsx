import Image from "next/image";
import { site } from "@/lib/site";

type LogoMarkProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function LogoMark({
  className = "h-14 w-auto",
  priority = false,
  sizes = "120px",
}: LogoMarkProps) {
  return (
    <Image
      src="/logo-pbl.png"
      alt={site.name}
      width={1024}
      height={1024}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
