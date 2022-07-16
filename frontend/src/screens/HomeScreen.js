import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Grid } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Heading as="h2" mb="8" fontSize="3xl">
        Latest Products
      </Heading>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <Grid templateColumns="1fr 1fr 1fr 1fr" gap="8">
          {products.map((newProduct) => (
            <ProductCard key={newProduct._id} product={newProduct} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;
