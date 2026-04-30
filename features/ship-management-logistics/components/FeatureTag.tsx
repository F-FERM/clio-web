type FeatureTagProps = {
  label: string;
};

export function FeatureTag({ label }: FeatureTagProps) {
  return (
    <span className="inline-flex rounded-full border border-black/20 px-3 py-1 text-xs leading-none text-[#2e2e36]">
      {label}
    </span>
  );
}
