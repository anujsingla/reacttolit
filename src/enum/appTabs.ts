export interface IAppTabs {
  id: string;
  label: string;
  path: string;
}

export type AppTabsType = typeof AppTabs;
export type AppTabKey = keyof typeof AppTabs;

export const AppTabs = {
  PRODUCTS: {
    id: "products",
    label: "Products",
    path: "/",
  },
  FEEDBACK: {
    id: "feedback",
    label: "Feedback",
    path: "/feedback",
  },
  ABOUT: {
    id: "about",
    label: "About",
    path: "/about",
  },
};
