import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MuiInputBase from "@mui/material/InputBase";
import MuiInputLabel from "@mui/material/InputLabel";

export const InputLabel = styled(MuiInputLabel)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(14),
  },
  "& .MuiInputLabel-asterisk": {
    color: theme.palette.error.main,
  },
}));

export const FieldWraper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: 15,
}));

export const IconWraper = styled(Box)(({ theme }) => ({
  marginTop: 33,
  "& .MuiSvgIcon-root": {
    fontSize: theme.typography.pxToRem(22),
  },
}));

export const InputBase = styled(MuiInputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 5,
    position: "relative",
    padding: "10px 12px",
    backgroundColor: "#F3F6F9",
    border: "1px solid #BABAC2",
    fontSize: theme.typography.pxToRem(14),
    transition: theme.transitions.create(["border-color"]),
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
    "&:hover": {
      borderColor: theme.palette.primary.main,
    },
    "&:disabled": {
      borderColor: theme.palette.text.disabled,
    },
  },
  "&.Mui-error": {
    "& .MuiInputBase-input": {
      border: "1px solid",
      borderColor: theme.palette.error.main,
    },
  },
}));
