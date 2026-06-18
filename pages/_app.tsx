import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isKinPage = router.pathname.startsWith("/kin");

  return (
    <ThemeProvider attribute="class" defaultTheme="night" enableSystem={false}>
      <div className={`app-shell ${isKinPage ? "app-shell--kin" : ""}`}>
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
