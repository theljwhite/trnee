export default function MainLayout({ children }) {
  return (
    <main className="my-12 lg:mt-16 lg:ml-16 flex-1 block">
      <div className="flex min-h-screen flex-col">{children}</div>
    </main>
  );
}
