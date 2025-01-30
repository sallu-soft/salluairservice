/** @type {import('next').NextConfig} */


module.exports = {
  // experimental: {
  //   serverActions: true,
  // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
           
          },
        ],
      },
}
