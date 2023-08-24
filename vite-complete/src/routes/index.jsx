import { Fragment } from "react";
import NotFound from "pages/not-found";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingLayout from "layouts/landing";

import Authenticated from "./authenticated";
import BROWSE_ROUTE from "./paths";

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
              <Authenticated is_authenticated={is_authenticated}>
                <Component />
              </Authenticated>
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
