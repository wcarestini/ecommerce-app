import axios from "axios";
import Head from "next/head";
import { CategoryCarousel } from "../components/CategoryCarousel";
import { PrincipalSection } from "../components/PrincipalSection";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>E-commerce | Home</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PrincipalSection />
        <CategoryCarousel category="apple" />
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   const api = axios.create({
//     baseURL: "http://0.0.0.0:8080",
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const data = await api.get("/products");
//   return {
//     props: {
//       products: data.data || [],
//     },
//   };
// };
