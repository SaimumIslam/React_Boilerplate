import { styled } from "@mui/material/styles";

export const Container = styled("header")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  "@media print": {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    gap: 20,
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const TitleWraper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 40,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const Title = styled("p")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.pxToRem(16),
  fontWeight: theme.typography.fontWeightMedium,
  "& small": {
    margin: "0px 10px",
    color: theme.palette.text.secondary,
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
  },
  "& span": {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.secondary,
  },
}));

export const ChildWraper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 20,
}));
