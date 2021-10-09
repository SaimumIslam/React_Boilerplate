import { Fragment, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ErrorBoundary } from "components/hoc";
import { NotFound } from "components/templates/errors";
import { SuspenseLoader } from "components/templates/loaders";

import BROWSE_ROUTE from "./paths";
import ProtectedRoute from "./protected-route";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        {BROWSE_ROUTE.map((route) => {
          const { path, component, exact, layout, secured } = route;
          const Layout = layout || Fragment;
          const Component = component || Fragment;

          const children = (
            <Layout>
              <ErrorBoundary>
                <Suspense fallback={<SuspenseLoader />}>
                  <Component />
                </Suspense>
              </ErrorBoundary>
            </Layout>
          );

          return secured ? (
            <ProtectedRoute path={path} exact={exact} key={path}>
              {children}
            </ProtectedRoute>
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
