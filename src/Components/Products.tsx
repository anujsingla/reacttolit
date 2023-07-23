import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Gallery,
  PageSection,
} from "@patternfly/react-core";
import { map } from "lodash";
import { useEffect } from "react";
import { fetchProducts } from "../redux/productsReducer";
import { useAppDispatch, useAppSelector } from "../redux/reduxHook";
import { Link } from "react-router-dom";

export function Products() {
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
          <Card isCompact key={product.id}>
            <CardTitle>
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: "100px" }}
              />
            </CardTitle>
            <CardBody>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </CardBody>
            <CardFooter>₹{product.price}</CardFooter>
          </Card>
        ))}
      </Gallery>
    </PageSection>
  );
}
