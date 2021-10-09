import { SignUp } from "pages";
import { LandingLayout } from "layouts";

const AUTHENTICATION_ROUTE = [
  {
    path: "/signup",
    exact: true,
    component: SignUp,
    layout: LandingLayout,
    secured: false,
  },
];

export default AUTHENTICATION_ROUTE;
