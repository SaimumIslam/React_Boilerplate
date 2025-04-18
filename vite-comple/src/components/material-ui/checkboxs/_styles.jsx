import { styled } from "@mui/material/styles";

import MuiCheckbox from "@mui/material/Checkbox";
import MuiFormLabel from "@mui/material/FormLabel";

export const FieldWraper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const Checkbox = styled(MuiCheckbox)(({ theme }) => ({
  "&.MuiCheckbox-root": {
    padding: 0,
    marginRight: 10,
  },
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
