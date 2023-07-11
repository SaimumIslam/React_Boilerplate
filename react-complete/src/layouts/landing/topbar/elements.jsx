import { styled } from "@mui/material/styles";

import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";

import Typography from "@mui/material/Typography";

export const AppBar = styled(MuiAppBar)(({ theme }) => ({
  paddingLeft: 30,
  paddingRight: 30,
  color: theme.palette.common.white,
}));

export const BrandName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  letterSpacing: ".3rem",
  textDecoration: "none",
  color: "inherit",
}));

export const NavItems = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  display: "flex",
  gap: 20,
}));

export const RouterLink = styled(Link)(({ theme }) => ({
  color: "inherit",
}));
