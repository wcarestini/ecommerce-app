import axios from "axios";
import Head from "next/head";
import { Carousel } from "../components/Carousel";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>E-commerce | Home</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Carousel products={products} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const api = axios.create({
    baseURL: "http://0.0.0.0:8080",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await api.get("/products");
  return {
    props: {
      products: data.data || [],
    },
  };
};
