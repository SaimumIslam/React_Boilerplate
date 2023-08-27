import { styled } from "@mui/material/styles";

export const EnableContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 5,
  cursor: "pointer",
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

export const DisableContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 5,
  cursor: "default",
  pointerEvents: "none",
  color: theme.palette.action.disabled,
}));

export const IconWraper = styled("div")(({ theme }) => ({
  color: "inherit",
  lineHeight: 1,
  "& .MuiSvgIcon-root": {
    fontSize: theme.typography.pxToRem(20),
  },
}));

export const TextButton = styled("p")(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(14),
  color: "inherit",
  lineHeight: 1,
}));
