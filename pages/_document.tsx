import Document, { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";
import About from "./about";

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-screen">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>{" "}
        </Head>
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
