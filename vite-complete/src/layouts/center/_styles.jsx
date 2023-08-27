import { styled } from "@mui/material/styles";

export const Root = styled("main")(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "grid",
  placeItems: "center",
  background: theme.palette.background.default,
}));
