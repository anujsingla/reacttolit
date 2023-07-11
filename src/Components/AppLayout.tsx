import {
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
} from "@patternfly/react-core";
import { AppTabs, AppTabKey } from "../enum/appTabs";
import { NavLink } from "react-router-dom";
import { keys, map } from "lodash";
interface IAppLayout {
  children: React.ReactNode;
}
export const mainContentId = "main-content-page-layout";

export function AppLayout({ children }: IAppLayout) {
  const logoProps = {
    href: "/",
  };

  const PageNav = (
    <Nav
      className="home-tabs"
      id="nav-primary-simple"
      aria-label="Nav"
      variant="horizontal"
    >
      <NavList id="nav-list-simple">
        {map(keys(AppTabs), (key) => {
          const tab = AppTabs[key as AppTabKey];
          return (
            <NavItem key={tab.id} itemId={tab.id}>
              <NavLink to={`${tab.path}`}>{tab.label}</NavLink>
            </NavItem>
          );
        })}
      </NavList>
    </Nav>
  );
  const Header = (
    <PageHeader
      logoProps={logoProps}
      logo="React to lit"
      className="react-to-lit-header"
      topNav={PageNav}
    />
  );
  return (
    <Page mainContainerId={mainContentId} header={Header}>
      <PageSection variant={PageSectionVariants.light}>{children}</PageSection>
    </Page>
  );
}
