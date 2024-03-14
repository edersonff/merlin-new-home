/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cobra.art.br", "*", "randomuser.me"],
  },
  distDir: "build",
};

export default nextConfig;
