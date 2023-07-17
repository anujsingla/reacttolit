import {
  BadgeCountObject,
  Button,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSection,
  PageSectionVariants,
} from "@patternfly/react-core";
import { AppTabs, AppTabKey } from "../enum/appTabs";
import { Link, NavLink } from "react-router-dom";
import { keys, map } from "lodash";
import { useAppSelector } from "../redux/reduxHook";
interface IAppLayout {
  children: React.ReactNode;
}
export const mainContentId = "main-content-page-layout";

export function AppLayout({ children }: IAppLayout) {
  const { productCart } = useAppSelector((state) => state.productCart);
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

  const badgeCountObjectNotRead: BadgeCountObject = {
    isRead: false,
    count: productCart?.length || 0,
    className: "custom-badge-unread",
  };

  const headerTools = () => {
    return (
      <PageHeaderTools>
        <Button
          component={(props: any) => <Link {...props} to="/cart" />}
          variant="link"
          countOptions={badgeCountObjectNotRead}
        >
          Cart
        </Button>
      </PageHeaderTools>
    );
  };

  const Header = (
    <PageHeader
      logoProps={logoProps}
      logo="React to lit"
      className="react-to-lit-header"
      topNav={PageNav}
      headerTools={headerTools()}
    />
  );
  return (
    <Page mainContainerId={mainContentId} header={Header}>
      <PageSection variant={PageSectionVariants.light}>{children}</PageSection>
    </Page>
  );
}
