import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(5),
  "@media print": {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    gap: 20,
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));

export const BackButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.pxToRem(14),
  fontWeight: theme.typography.fontWeightRegular,
}));

export const TitleWraper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 40,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.primary.main,
  "& small": {
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightRegular,
    margin: "0px 10px",
  },
  "& span": {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.secondary,
  },
}));

export const ChildWraper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 20,
}));
