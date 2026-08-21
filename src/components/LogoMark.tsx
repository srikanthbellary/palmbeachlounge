import Image from "next/image";
import { site } from "@/lib/site";

type LogoMarkProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
  src?: string;
};

export function LogoMark({
  className = "h-14 w-auto",
  priority = false,
  sizes = "120px",
  src = "/logo-pbl.png",
}: LogoMarkProps) {
  return (
    <Image
      src={src}
      alt={site.name}
      width={1024}
      height={1024}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
