import ReactMarkdown from "react-markdown";

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        ul: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-4">{children}</ol>,
        code: ({ children }) => (
          <code className="bg-gray-100 py-0.5 px-1.5 rounded-sm">
            {children}
          </code>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
