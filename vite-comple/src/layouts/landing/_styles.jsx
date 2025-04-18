import { styled } from "@mui/material/styles";

export const ContentWraper = styled("main")(({ theme }) => ({
  padding: 30,
  width: "100%",
  overflowX: "auto",
  position: "relative",
  maxWidth: theme.breakpoints.values.xl,
}));
