import {
  Card,
  CardActions,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Dropdown,
  Gallery,
  PageSection,
} from "@patternfly/react-core";
import { map } from "lodash";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productsReducer";
import { useAppDispatch, useAppSelector } from "../redux/reduxHook";

export function Page1() {
  const dispatch = useAppDispatch();
  const { data: products } = useAppSelector((state) => state.products.products);

  console.log("product", products);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageSection isFilled>
      <Gallery hasGutter aria-label="Selectable card container">
        {map(products, (product) => (
          <Card hasSelectableInput isCompact key={product.id}>
            <CardTitle>
              <img
                src={product.image}
                alt={`name icon`}
                style={{ maxWidth: "100px" }}
              />
            </CardTitle>
            <CardBody>{product.title}</CardBody>
            <CardFooter>₹{product.price}</CardFooter>
          </Card>
        ))}
      </Gallery>
    </PageSection>
  );
}
