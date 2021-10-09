import LANDING_ROUTE from "./landing";
import AUTHENTICATION_ROUTE from "./authentication";

const BROWSE_ROUTE = [...LANDING_ROUTE, ...AUTHENTICATION_ROUTE];

export default BROWSE_ROUTE;
