import axios from "axios";
import { GetServerSideProps } from "next";

export function Product() {
  return <></>;
}
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  try {
    const { data, status } = await axios.get(
      "http://0.0.0.0:8080/products/" + id
    );

    return {
      props: {
        products: data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
