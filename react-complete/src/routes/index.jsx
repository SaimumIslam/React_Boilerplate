import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "pages/not-found";
import LandingLayout from "layouts/landing";

import BROWSE_ROUTE from "./paths";

import AuthenticatedRoute from "./authenticated-route";

// let router = createBrowserRouter();

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {BROWSE_ROUTE.map((item) => {
          const { path, component, layout, is_authenticated } = item;
          const Layout = layout || LandingLayout;
          const Component = component || Fragment;

          const LayoutView = (
            <Layout>
              <AuthenticatedRoute is_authenticated={is_authenticated}>
                <Component />
              </AuthenticatedRoute>
            </Layout>
          );

          return <Route key={path} path={path} element={LayoutView} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
