import Landing from "pages/landing";
// import LandingLayout from "layouts/landing";
// import ErrorBoundary from "components/hoc/error-boundary";

// const LANDING_ROUTE1 = {
//   path: "/",
//   Component: LandingLayout,
//   ErrorBoundary: ErrorBoundary,
//   children: [
//     {
//       index: true,
//       Component: Landing,
//     },
//   ],
// };

const LANDING_ROUTE = [
  {
    path: "/",
    component: Landing,
    is_authenticated: false,
  },
];

export default LANDING_ROUTE;
