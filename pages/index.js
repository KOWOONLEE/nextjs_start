import Head from "next/head";
import Seo from "../components/Seo";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// const API_KEY = "0228158c96d8626eb12b82af4b710b51";

export default function Home({ results }) {
  const router = useRouter();
  console.log(results);
  const movieClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          onClick={() => {
            movieClick(movie.id, movie.original_title);
          }}
          className="movie"
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
          <h4>
            <Link
              href={`/movies/${movie.original_title}/${movie.id}`}
              key={movie.id}
              legacyBehavior
            >
              <a> {movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
//이름 중요 바꾸면 안됨. 백엔드에서 실행(서버에서 실행)
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3005/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
