import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="h-screen">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&display=swap" rel="stylesheet" />
          <script defer src="https://unpkg.com/tailwindcss-intersect@1.x.x/dist/observer.min.js"></script>

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
