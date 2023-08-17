import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

export const NavBar = styled("nav")(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: 20,
  position: "static",
  display: "flex",
}));

export const BrandName = styled(Link)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  letterSpacing: ".3rem",
  textDecoration: "none",
  color: "inherit",
}));

export const NavItems = styled("div")(({ theme }) => ({
  marginLeft: "auto",
  display: "flex",
  gap: 20,
}));

export const RouterLink = styled(Link)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },
}));
