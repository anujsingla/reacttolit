import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Grid,
  GridItem,
} from "@patternfly/react-core";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../redux/productsReducer";
import { useAppDispatch, useAppSelector } from "../redux/reduxHook";

export function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useAppDispatch();
  const { data: productsByIds, isFetching } = useAppSelector(
    (state) => state.products.productByIds
  );
  const productDetail = productsByIds?.[productId];

  console.log("product", productDetail, isFetching);

  useEffect(() => {
    dispatch(fetchProductById(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  if (isFetching) {
    return <h1>Fetching the data from the backend</h1>;
  } else if (isEmpty(productDetail)) {
    return <h1>No data</h1>;
  }
  return (
    <Card id="product-details" isFlat>
      <Grid md={6}>
        <GridItem
          style={{
            minHeight: "800px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${productDetail.image})`,
          }}
        />
        <GridItem>
          <CardTitle>{productDetail.title}</CardTitle>
          <CardBody>{productDetail.description}</CardBody>
          <CardFooter>₹{productDetail.price}</CardFooter>
        </GridItem>
      </Grid>
    </Card>
  );
}
