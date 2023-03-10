import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { CategoryCarousel } from "../components/CategoryCarousel";
import { PrincipalSection } from "../components/PrincipalSection";
import { ProductCard } from "../components/ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface HomeProps {
  products: {};
}

export default function Home({ products }: HomeProps) {
  Object.keys(products);
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
        {Object.keys(products).map((productKey) => {
          return (
            <CategoryCarousel category={productKey}>
              {products[productKey].map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    price={product.price}
                  />
                );
              })}
            </CategoryCarousel>
          );
        })}
      </main>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async ({}) => {
  const { data: categories } = await axios.get(
    "http://0.0.0.0:8080/categories"
  );

  const productsByCategory = {};

  await Promise.all(
    categories.map(async (category) => {
      const { data: products } = await axios.get(
        "http://0.0.0.0:8080/products/category/" + category.name
      );
      // productsByCategory.set(category.name, products);
      productsByCategory[category.name] = products;
    })
  );

  // console.log(productsByCategory);

  return {
    props: {
      products: productsByCategory,
    },
  };
};
