import { Landing } from "pages";
import { LandingLayout } from "layouts";

const LANDING_ROUTE = [
  {
    path: "/",
    exact: true,
    component: Landing,
    layout: LandingLayout,
    secured: false,
  },
];

export default LANDING_ROUTE;
