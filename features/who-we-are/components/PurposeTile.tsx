import Image from "next/image";
import yellowPattern from "../../../public/images/patterns/yellow-pattern.jpg";
import maroonPattern from "../../../public/images/patterns/maroonpattern.jpg";
import grayPattern from "../../../public/images/patterns/graypattern.jpg";

type PurposeTileProps = {
  title: string;
  description?: string;
  points?: string[];
  variant: "blue" | "yellow";
};

const cardVariantStyles = {
  blue: "bg-[#E0EFFA]",
  yellow: "bg-[#FAE651]",
};

const patternImages = {
  blue: grayPattern,
  yellow: yellowPattern,
};

export function PurposeTile({
  title,
  description,
  points,
  variant,
}: PurposeTileProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[20px] p-5 sm:p-6 min-h-[200px] transition-transform duration-300 ease-out hover:-translate-y-2 ${cardVariantStyles[variant]}`}
    >
      {/* Pattern Background */}
      <Image
        src={patternImages[variant]}
        alt="Pattern"
        fill
        className="absolute inset-0 object-cover opacity-20 mix-blend-multiply pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col py-5">
        {/* Title */}
        <h3 className="mb-3 text-[16px] sm:text-[20px] font-semibold text-[#901027] text-center">
          {title}
        </h3>

        {/* ✅ Description */}
        {description && (
          <p className="text-[14px] sm:text-[16px] text-[#464646] text-center max-w-[90%] mx-auto leading-relaxed">
            
            {description}
          </p>
        )}

        {/* ✅ Points (ALL items shown) */}
        {points && points.length > 0 && (
          <ul className="mt-4 space-y-2 max-w-[90%] mx-auto">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-[#464646]"
              >
                <span className="mt-[6px] h-2 w-2 rounded-full bg-black shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
  
