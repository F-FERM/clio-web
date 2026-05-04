import Link from "next/link";

type FooterColumnProps = {
  title: string;
  items: readonly { label: string; href: string }[];
};

export function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="text-[18px] text-[#AAAAAA] cursor-pointer hover:text-white transition-colors"
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
