/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.bringmeister.de",
                // port: "",
                // pathname: "/account123/**",
            },
        ],
    },
};
