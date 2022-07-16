import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import adrianPhoto from "../public/adrianphoto.jpg";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Adrian Aranda</title>
        <meta
          name="description"
          content="Generated by create next app"
          key="Adrian"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

    </div>
  );
};

export default Home;
