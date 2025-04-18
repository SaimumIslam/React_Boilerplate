import { styled } from "@mui/material/styles";

export const Container = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.06)",
  borderRadius: 10,
  width: "100%",
  padding: 30,
  [theme.breakpoints.down("sm")]: {
    padding: 20,
  },
}));

export const Title = styled("h2")(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  color: theme.palette.text.secondary,
}));

export const FormWraper = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  width: "60%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
