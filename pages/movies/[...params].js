import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Seo from "../../components/Seo";

export default function Detail({ params, movieDetail }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div className="container">
      <Seo title={title} />
      <h4 className="movieTitle">{movieDetail.title}</h4>
      <img
        className="movieposter"
        alt="movieposter"
        src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
      />
      <h3>영화 정보</h3>
      <div className="movieDetail">
        <table>
          <tbody>
            <tr>
              <td>개봉일</td>
              <td>{movieDetail.release_date}</td>
            </tr>
            <tr>
              <td>관람객 수</td>
              <td>{movieDetail.popularity}</td>
            </tr>
            <tr>
              <td>평점</td>
              <td>{movieDetail.vote_average}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="movieOverview">
        <h3>영화 개요</h3>
        <div className="movieOverviewDetail">{movieDetail.overview}</div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        .movieTitle {
          display: flex;
          text-align: center;
          font-size: 25px;
          margin: 10px auto;
        }
        .movieposter {
          display: flex;
          width: 90%;
          text-align: center;
          margin: 5px auto;
          border-radius: 5px;
        }
        .movieDetail {
          display: inline-block;
          width: 90%;
          height: 25vh;
          background-color: #e1e7dd;
          border-radius: 5px;
          margin: 0 auto;
        }
        table {
          display: inline-block;
          width: 100%;
          border-collapse: unset;
          vertical-align: center;
          font-size: 1.1em;
          font-weight: bold;
          padding-top: 10px;
        }
        tr {
          display: inline-block;
          width: 100%;
        }
        th,
        td {
          display: inline-block;
          width: 40%;
          padding: 13px;
        }
        .movieOverviewDetail {
          display: flex;
          width: 90%;
          background-color: lightgray;
          line-height: 1.4;
          border-radius: 5px;
          margin: 10px auto;
          padding: 5px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  // console.log(ctx);
  const movieDetail = await (
    await axios.get(`http://localhost:3003/api/movies/${params[1]}`)
  ).data;
  return {
    props: {
      movieDetail,
    },
  };
}
