import createMDX from '@next/mdx'
import remarkGFM from "remark-gfm"
import rhypePrettyCode from "rehype-pretty-code"
import rhypeAutolinkHead from "rehype-autolink-headings"
import rhSlug from "rehype-slug"

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}



/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "catppuccin-mocha"
};

const withMdx = createMDX({
  options: {
    remarkPlugins: [remarkGFM],
    rehypePlugins: [[rhypePrettyCode, options], rhypeAutolinkHead, rhSlug],
  },
  experimental: {
    mdxRs: true,
  }
})

export default withMdx(nextConfig);
