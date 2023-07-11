import React from "react";
import Toolbar from "@mui/material/Toolbar";

import { AppBar, BrandName, RouterLink, NavItems } from "./elements";

const PAGES = [
  { title: "Users", path: "/users" },
  { title: "User Create", path: "/users/create" },
];

function Topbar() {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <BrandName component={RouterLink} to="/">
          LOGO
        </BrandName>
        <NavItems>
          {PAGES?.map(({ title, path }) => (
            <RouterLink key={path} to={path}>
              {title}
            </RouterLink>
          ))}
        </NavItems>
      </Toolbar>
    </AppBar>
  );
}
export default Topbar;
