import Head from "next/head";
import { Carousel } from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce | Home</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Carousel />
      </main>
    </>
  );
}
