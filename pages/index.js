import Head from "next/head";
import Seo from "../components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "0228158c96d8626eb12b82af4b710b51";
export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { boxOfficeResult } = await (
        await fetch(
          `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=20221113`
        )
      ).json();
      // console.log(boxOfficeResult.dailyBoxOfficeList);
      setMovies(boxOfficeResult.dailyBoxOfficeList);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies.map((movie) => (
        <div key={movie.rnum}>
          <h4>{movie.movieNm}</h4>
        </div>
      ))}
      <style jsx global>{``}</style>
    </div>
  );
}
