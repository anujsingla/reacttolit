import { Alert, PageSection } from "@patternfly/react-core";
import React from "react";
import { NavLink } from "react-router-dom";

export const NotFound = () => (
  <PageSection>
    <Alert variant="danger" title="404! This view hasn't been created yet." />
    <br />
    <NavLink to="/" className="pf-c-nav__link">
      Take me home
    </NavLink>
  </PageSection>
);
