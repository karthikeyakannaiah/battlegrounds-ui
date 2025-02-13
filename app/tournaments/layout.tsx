export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-5 mx-10 p-2 bg-slate-100 rounded-lg">{children}</div>
  );
}
