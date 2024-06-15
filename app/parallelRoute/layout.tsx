export default function PageTestLayout({
  hello,
  two,
}: Readonly<{
  hello: React.ReactNode;
  two: React.ReactNode;
}>) {
  return (
    <div>
      <section>{hello}</section>
      <section>{two}</section>
    </div>
  );
}
