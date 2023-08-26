import ABOUT_ROUTE from "./about";
import AUTH_ROUTE from "./auth";
import LANDING_ROUTE from "./landing";
import USER_ROUTE from "./users";

const BROWSE_ROUTE = [...LANDING_ROUTE, ...ABOUT_ROUTE, ...USER_ROUTE, ...AUTH_ROUTE];

export default BROWSE_ROUTE;
