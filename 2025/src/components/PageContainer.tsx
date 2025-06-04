import clsx from "clsx";

export function PageContainer({
  children,
  title,
  centerizeTitle = true,
}: {
  children: React.ReactNode;
  title?: string;
  centerizeTitle?: boolean;
}) {
  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0 pt-16 md:pt-32 flex flex-col gap-2 pb-24">
      {title && (
        <h1
          className={clsx(
            "text-3xl font-bold",
            centerizeTitle && "text-center"
          )}
        >
          {title}
        </h1>
      )}
      {children}
    </div>
  );
}
