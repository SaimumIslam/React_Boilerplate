import Details from "pages/users/details";
import Manage from "pages/users/manage";
import Root from "pages/users/root";

const USER_ROUTE = [
  {
    path: "/users",
    is_authenticated: false,
    component: Root,
  },
  {
    path: "/users/create",
    is_authenticated: true,
    component: Manage,
  },
  {
    path: "/users/update/:id",
    is_authenticated: true,
    component: Manage,
  },
  {
    path: "/users/:id",
    is_authenticated: true,
    component: Details,
  },
];

export default USER_ROUTE;
