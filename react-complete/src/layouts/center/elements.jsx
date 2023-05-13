import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Root = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  display: "grid",
  placeItems: "center",
  background: theme.palette.background.default,
}));
