import Image from "next/image";

type FounderMediaProps = {
  imageSrc: string;
  alt?: string;
};

export function FounderMedia({
  imageSrc,
  alt = "Andrzej Kroczewski, twórca Mission Offline",
}: FounderMediaProps) {
  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 45vw"
      className="object-cover"
    />
  );
}
