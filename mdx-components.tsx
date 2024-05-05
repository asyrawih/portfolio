import type { MDXComponents } from 'mdx/types'



export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, id }) => (
      <h1 id={id} className='text-3xl'>{children}</h1>
    ),
    h2: ({ children, id }) => (
      <h1 id={id} className='text-2xl'>{children}</h1>
    ),
    ...components,
  }
}
