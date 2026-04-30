import Image from "next/image";

type BandImageProps = {
  imagePosition: "left" | "center" | "right";
};

const imagePositionClasses: Record<BandImageProps["imagePosition"], string> = {
  left: "object-left",
  center: "object-center",
  right: "object-right",
};

export function BandImage({ imagePosition }: BandImageProps) {
  return (
    <div className="relative h-[120px] overflow-hidden rounded-[18px]">
      <Image
        src="/images/latest-article.png"
        alt="Maritime scene"
        fill
        className={`object-cover ${imagePositionClasses[imagePosition]}`}
      />
    </div>
  );
}
