import NavBar from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <h1>hello</h1>
    </>
  );
}

export default MyApp;
