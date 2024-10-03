/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'cdn-icons-png.flaticon.com'
            },
            {
                protocol:'https',
                hostname:'i.ibb.co'
            },
            {
                protocol:'https',
                hostname:'example.com'
            },
            {
                protocol:'https',
                hostname:'a0.muscache.com'
            },
        ]
    }
};

export default nextConfig;
