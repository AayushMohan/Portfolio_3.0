/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "img.icons8.com",
      "res.cloudinary.com",
      "upload.wikimedia.org",
      "cdn-images-1.medium.com",
    ],
  },
  publicRuntimeConfig: {
    // This will allow crawlers to access your app.
    allowlist: ["/"],
  },
};

module.exports = nextConfig;
