type BenefitListProps = {
  items: readonly string[];
};

export function BenefitList({ items }: BenefitListProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-[12px] border border-[#d2d6de] px-9 py-4 text-[28px] font-medium text-[#8f1131]"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
