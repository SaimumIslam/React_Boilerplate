import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Root = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
}));

export const ContentWraper = styled("main")(({ theme }) => ({
  padding: 30,
  width: "100%",
  overflowX: "auto",
  position: "relative",
  maxWidth: theme.breakpoints.values.xl,
}));
