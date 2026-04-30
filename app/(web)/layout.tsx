export default function WebLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full bg-white">{children}</div>;
}
