import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Flex,
  FlexItem,
  Grid,
  GridItem,
} from "@patternfly/react-core";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addCartItem } from "../redux/cartReducer";
import { fetchProductById } from "../redux/productsReducer";
import { useAppDispatch, useAppSelector } from "../redux/reduxHook";
import { ProductQuantity } from "./ProductQuantity";
import { ToastNotification } from "./ToastNotification";

export function ProductDetail() {
  const [selected, setSelected] = useState<number>(1);
  const { productId } = useParams();
  //console.log(productId);
  const dispatch = useAppDispatch();
  const { data: productsByIds, isFetching } = useAppSelector(
    (state) => state.products.productByIds
  );
  const productDetail = productsByIds?.[productId];

  // console.log("product", productDetail, isFetching);

  useEffect(() => {
    dispatch(fetchProductById(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  if (isFetching) {
    return <h1>Fetching the data from the backend</h1>;
  } else if (isEmpty(productDetail)) {
    return <h1>No data</h1>;
  }
  const onClickAddToCart = async () => {
    const item = {
      id: productDetail.id,
      title: productDetail.title,
      price: productDetail.price,
      quantity: selected,
    };
    await dispatch(addCartItem(item));
    ToastNotification.addSuccessMessage("Added product in the cart");
    setSelected(1);
  };

  const onSelectValue = (quantity: number) => {
    setSelected(quantity);
  };

  return (
    <Card id="product-details" isFlat>
      <Grid md={3}>
        <GridItem>
          <img
            src={productDetail?.image}
            alt={"Carlie Anglemire"}
            height="380"
            width="380"
          />
        </GridItem>
        <GridItem>
          <CardTitle>{productDetail.title}</CardTitle>
          <CardBody>{productDetail.description}</CardBody>
          <CardFooter>
            <Flex direction={{ default: "column" }}>
              <FlexItem>₹{productDetail.price}</FlexItem>
              <FlexItem>
                <ProductQuantity
                  onSelectValue={onSelectValue}
                  selectedValue={selected}
                />
              </FlexItem>
              <FlexItem>
                <Button onClick={onClickAddToCart}>Add to Cart</Button>
              </FlexItem>
            </Flex>
          </CardFooter>
        </GridItem>
      </Grid>
    </Card>
  );
}
