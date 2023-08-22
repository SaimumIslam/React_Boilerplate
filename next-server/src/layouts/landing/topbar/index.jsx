import React from "react";

import { BrandName, NavBar, NavItems, RouterLink } from "./_styles";

const PAGES = [
  { title: "Users", path: "/users" },
  { title: "User Create", path: "/users/create" },
];

function Topbar() {
  return (
    <NavBar>
      <BrandName href="/">LOGO</BrandName>
      <NavItems>
        {PAGES?.map(({ title, path }) => (
          <RouterLink key={path} href={path}>
            {title}
          </RouterLink>
        ))}
      </NavItems>
    </NavBar>
  );
}
export default Topbar;
