import About from "pages/about";

import CenterLayout from "layouts/center";

// const ABOUT_ROUTE1 = {
//   path: "/about",
//   Component: About,
//   ErrorBoundary: CenterLayout,
// };

const ABOUT_ROUTE = [
  {
    path: "/about",
    component: About,
    layout: CenterLayout,
    is_authenticated: false,
  },
];

export default ABOUT_ROUTE;
