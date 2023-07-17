import {
  CardBody,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  List,
  ListItem,
} from "@patternfly/react-core";
import { find, isEmpty, map } from "lodash";
import { useAppSelector } from "../redux/reduxHook";

export const ViewCartProducts = () => {
  const { productCart, totalPrice } = useAppSelector(
    (state) => state.productCart
  );
  const { data: products } = useAppSelector((state) => state.products.products);
  if (isEmpty(productCart)) {
    return <div>Add items in the cart</div>;
  }
  return (
    <>
      <List isPlain isBordered>
        {map(productCart, (c) => {
          const productDetail = find(products, (p) => p.id === c.id);
          return (
            <ListItem>
              <Grid md={2}>
                <GridItem>
                  <img
                    src={productDetail?.image}
                    alt={"Carlie Anglemire"}
                    height="180"
                    width="180"
                  />
                </GridItem>
                <GridItem>
                  <Flex direction={{ default: "column" }}>
                    <FlexItem>{productDetail?.title}</FlexItem>
                    <FlexItem>₹{productDetail?.price}</FlexItem>
                  </Flex>
                </GridItem>
              </Grid>
            </ListItem>
          );
        })}
        <ListItem className="text-align-right">
          Total Price: <b>{totalPrice}</b>
        </ListItem>
      </List>
    </>
  );
};
