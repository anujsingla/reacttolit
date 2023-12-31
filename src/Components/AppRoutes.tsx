import { Routes, Route, Navigate } from "react-router-dom";
import { Feedback } from "./Feedback";
import { About } from "./About";
import { ProductDetail } from "./ProductDetail";
import { NotFound } from "./NotFound";
import { Products } from "./Products";
import { ViewCartProducts } from "./ViewCartProducts";

export const mainContentId = "main-content-page-layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<ViewCartProducts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
