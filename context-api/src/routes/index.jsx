import { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFound } from "components/templates/errors";

import AuthenticatedRoute from "./authenticated-route";
import BROWSE_ROUTE from "./paths";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        {BROWSE_ROUTE.map((item) => {
          const { path, component, exact, layout, authenticated } = item;
          const Layout = layout || Fragment;
          const Component = component || Fragment;

          const children = (
            <Layout>
              <Component />
            </Layout>
          );

          return authenticated ? (
            <AuthenticatedRoute path={path} exact={exact} key={path}>
              {children}
            </AuthenticatedRoute>
          ) : (
            <Route path={path} exact={exact} key={path}>
              {children}
            </Route>
          );
        })}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
