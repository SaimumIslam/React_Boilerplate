import Root from "pages/users/root";
import Manage from "pages/users/manage";
import Details from "pages/users/details";

const USER_ROUTE = [
  {
    path: "/users",
    is_authenticated: true,
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
