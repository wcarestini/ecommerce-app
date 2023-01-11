import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { CategoryCarousel } from "../../components/CategoryCarousel";
import { ProductCard } from "../../components/ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface SearchResultProps {
  products: Product[];
  searchTerm: string;
}

function SearchResult({ products, searchTerm }: SearchResultProps) {
  console.log(products);
  return (
    <>
      <Head>
        <title>E-commerce | {searchTerm}</title>
        <meta name="description" content="E-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ minHeight: "100vh" }}>
        <CategoryCarousel category="resultado">
          {products.map((product) => {
            return (
              <ProductCard
                id={product.id}
                title={product.name.substring(0, 20)}
                description={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            );
          })}
        </CategoryCarousel>
      </main>
    </>
  );
}

export default SearchResult;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { searchTerm } = query;
  try {
    const { data, status } = await axios.get(
      "http://0.0.0.0:8080/products/search/" + searchTerm
    );

    return {
      props: {
        products: data,
        searchTerm,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
