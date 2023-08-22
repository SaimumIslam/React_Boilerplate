import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";

export const RoundedButton = styled(Button)(({ theme }) => ({
  "& .MuiButton-root": {
    borderRadius: 30,
    textTransform: "capitalize",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    minWidth: 120,
  },
  contained: {
    padding: "7px 35px", //40 height
    "&:hover": {
      boxShadow: theme.shadows[8],
    },
    "&:active": {
      boxShadow: theme.shadows[8],
    },
    "&:focus": {
      boxShadow: theme.shadows[8],
    },
  },
  "& .MuiButton-containedPrimary": {
    boxShadow: `0px 5px 5px -3px ${alpha(
      theme.palette.primary.main,
      0.2,
    )},0px 8px 10px 1px ${alpha(
      theme.palette.primary.main,
      0.14,
    )},0px 3px 14px 2px ${alpha(theme.palette.primary.main, 0.12)}`,
  },
  "& .MuiButton-containedSecondary": {
    boxShadow: `0px 5px 5px -3px ${alpha(
      theme.palette.secondary.main,
      0.2,
    )},0px 8px 10px 1px ${alpha(
      theme.palette.secondary.main,
      0.14,
    )},0px 3px 14px 2px ${alpha(theme.palette.secondary.main, 0.12)}`,
  },

  "& .MuiButton-outlined": {
    padding: "6px 30px", //40 height
    border: `1px solid ${
      theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"
    }`,
  },
  "& .MuiButton-outlinedPrimary": {
    border: `1px solid ${alpha(theme.palette.primary.main, 0.9)}`,
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  "& .MuiButton-outlinedSecondary": {
    border: `1px solid ${alpha(theme.palette.secondary.main, 0.9)}`,
    "&:hover": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  },

  "& .MuiButton-startIcon": {
    "& .MuiSvgIcon-root": {
      fontSize: theme.typography.pxToRem(18),
    },
  },
  "& .MuiButton-endIcon": {
    "& .MuiSvgIcon-root": {
      fontSize: theme.typography.pxToRem(18),
    },
  },
}));

export default RoundedButton;
