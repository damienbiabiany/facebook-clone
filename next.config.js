/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* Next.js needs to know what are the domain names
     where we are going to get the images to load them in the component
     <Image/>
     https://nextjs.org/docs/basic-features/image-optimization
  */
  images: {
    domains: [
      'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com'
    ],
  },
}

module.exports = nextConfig
