import LANDING_ROUTE from "./landing";
import ABOUT_ROUTE from "./about";
import USER_ROUTE from "./users";
import AUTH_ROUTE from "./auth";

const BROWSE_ROUTE = [
  ...LANDING_ROUTE,
  ...ABOUT_ROUTE,
  ...USER_ROUTE,
  ...AUTH_ROUTE,
];

export default BROWSE_ROUTE;
