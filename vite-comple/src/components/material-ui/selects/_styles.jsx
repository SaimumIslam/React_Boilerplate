import { styled } from "@mui/material/styles";

import MuiFormLabel from "@mui/material/FormLabel";
import MuiInputBase from "@mui/material/InputBase";
import MuiNativeSelect from "@mui/material/NativeSelect";

export const FieldWraper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
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
  marginTop: 35,
  marginRight: 20,
  "& .MuiSvgIcon-root": {
    fontSize: theme.typography.pxToRem(24),
  },
}));

export const SelectOption = styled("option")(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
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
      borderRadius: 5,
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

export const NativeSelect = styled(MuiNativeSelect)(({ theme }) => ({
  "&.MuiNativeSelect-root": {},
  "&.MuiNativeSelect-select": {},
  "& .MuiNativeSelect-icon": {
    top: "calc(50%)",
    right: theme.spacing(2),
    transform: "translateY(-50%)",
    fontSize: theme.typography.pxToRem(16),
  },
}));
