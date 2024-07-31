/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CAPTCHA_KEY: process.env.CAPTCHA_KEY,
        CAPTCHA_SERVER_KEY: process.env.CAPTCHA_SERVER_KEY
    },
};

export default nextConfig;
