import TOPBAR_NAVIGATIONS from "routes/navigations/topbar";

import { BrandName, NavBar, NavItems, RouterLink } from "./_styles";

function Topbar() {
  return (
    <NavBar>
      <BrandName to="/">LOGO</BrandName>
      <NavItems>
        {TOPBAR_NAVIGATIONS?.map(({ title, path }) => (
          <RouterLink key={path} to={path}>
            {title}
          </RouterLink>
        ))}
      </NavItems>
    </NavBar>
  );
}
export default Topbar;
