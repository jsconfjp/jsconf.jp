import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-center my-16">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold my-4">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-lg font-bold">{children}</h3>,
    a: ({ children, href }) => (
      <a href={href} target="_blank" className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc pl-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-4">{children}</ol>,
    p: ({ children }) => <p className="my-2">{children}</p>,
  };
}
