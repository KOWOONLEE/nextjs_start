const API_KEY = "bdfeb744732f53366f6bad2b48ccfbf4";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
        //source랑 destination명칭을 동일하게 해주기 :id 면 :id로
      },
    ];
  },
};

module.exports = nextConfig;

//redirect 이용 - url이 변경
//한페이지에서 다른페이지로 이동가능 혹은 다른 사이트 이동 가능

//rewrites는 유저를 redirect 시키기는 하지만
//url은 변경되지 않음.
