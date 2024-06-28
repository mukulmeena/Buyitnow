import axios from "axios";
import ListProducts from "@/components/products/ListProducts";

const getProducts = async () => {
  const { data } = await axios.get(`${process.env.API_URL}/api/product`);

  return data["data"];
};

const HomePage = async () => {
  const productData = await getProducts();
  return <ListProducts data={productData} />;
};

export default HomePage;
