import Login from "pages/auth/login";

const AUTH_ROUTE = [
  {
    path: "/login",
    component: Login,
    is_authenticated: false,
  },
];

export default AUTH_ROUTE;
