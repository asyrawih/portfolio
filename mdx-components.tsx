import type { MDXComponents } from 'mdx/types'



export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ id, children }) => <a href={`#${id}`}><h1 className="text-5xl font-bold">{children}</h1></a>,
    h2: ({ children }) => <h2 className="text-4xl font-bold">{children}</h2>,
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    body: ({ children }) => <div className='container'>{children}</div>,
  }
}
