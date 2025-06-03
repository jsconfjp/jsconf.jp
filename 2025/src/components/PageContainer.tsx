export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0 pt-16 md:pt-32 flex flex-col gap-4 pb-24">
      {children}
    </div>
  );
}
