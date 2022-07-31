// Styles
import '../styles/globals.scss'
// Next error
import Error from "next/error";

function MyApp({ Component, pageProps }) {
  if (pageProps.error) {
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />;
  }
  return (
    <Component {...pageProps} />
  );
}

export default MyApp
