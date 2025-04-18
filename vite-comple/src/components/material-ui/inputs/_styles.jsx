import { styled } from "@mui/material/styles";

import MuiInputBase from "@mui/material/InputBase";
import MuiFormLabel from "@mui/material/FormLabel";

export const FieldWraper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: 15,
}));

export const FormLabel = styled(MuiFormLabel)(({ theme }) => ({
  "&.MuiFormLabel-root": {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(14),
  },
  "&.MuiInputLabel-asterisk": {
    color: theme.palette.error.main,
  },
  "&.Mui-error": {
    color: theme.palette.error.main,
  },
}));

export const IconWraper = styled("div")(({ theme }) => ({
  marginTop: 33,
  "& .MuiSvgIcon-root": {
    fontSize: theme.typography.pxToRem(22),
  },
}));

export const InputBase = styled(MuiInputBase)(({ theme }) => ({
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
