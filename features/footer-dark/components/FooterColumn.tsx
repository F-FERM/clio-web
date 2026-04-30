type FooterColumnProps = {
  title: string;
  items: readonly string[];
};

export function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm text-white/75">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
