import { Routes, Route } from "react-router-dom";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";

export const mainContentId = "main-content-page-layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
      <Route path="page3" element={<Page3 />} />
    </Routes>
  );
}
