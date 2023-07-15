export interface IAppTabs {
  id: string;
  label: string;
  path: string;
}

export type AppTabsType = typeof AppTabs;
export type AppTabKey = keyof typeof AppTabs;

export const AppTabs = {
  HOME: {
    id: "home",
    label: "Home",
    path: "/",
  },
  Page2: {
    id: "feedback",
    label: "Feedback",
    path: "/feedback",
  },
  Page3: {
    id: "page3",
    label: "Page3",
    path: "/page3",
  },
};
