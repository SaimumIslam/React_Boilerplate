import CenterLayout from "layouts/center";
import About from "pages/about";

const ABOUT_ROUTE = [
  {
    path: "/about",
    component: About,
    layout: CenterLayout,
    is_authenticated: false,
  },
];

export default ABOUT_ROUTE;
