import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
};
 
const withMDX = createMDX({
  extension: /\.mdx?$/,
});
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig);
