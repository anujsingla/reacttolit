import { Routes, Route, Navigate } from "react-router-dom";
import { Feedback } from "./Feedback";
import { Page3 } from "./Page3";
import { ProductDetail } from "./ProductDetail";
import { NotFound } from "./NotFound";
import { Products } from "./Products";

export const mainContentId = "main-content-page-layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/products" />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="page3" element={<Page3 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
