import ReactMarkdown from "react-markdown";

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        ul: ({ children }) => <ul className="list-disc pl-4 ml-4 mb-4">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-4">{children}</ol>,
        pre: ({ children }) => (
          <pre className="bg-gray-100 py-0.5 px-1.5 rounded-sm">{children}</pre>
        ),
        code: ({ children }) => (
          <code className="bg-gray-100 py-0.5 px-1.5 rounded-sm">
            {children}
          </code>
        ),
        p: ({ children }) => <p className="mb-4">{children}</p>,
        hr: () => <hr className="border-gray-100 my-4" />,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
