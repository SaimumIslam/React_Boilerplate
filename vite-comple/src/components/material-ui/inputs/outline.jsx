import { forwardRef } from "react";
import PropTypes from "prop-types";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import { FieldWraper, FormLabel, IconWraper, InputBase } from "./_styles";

const OutlineInputField = forwardRef((props, ref) => {
  const {
    label,
    error,
    color,
    required,
    fullWidth,
    startIcon,
    helperText,
    placeholder,
    ...others
  } = props;

  const Icon = startIcon;

  return (
    <FieldWraper>
      {Boolean(startIcon) && (
        <IconWraper>
          <Icon color={color} />
        </IconWraper>
      )}
      <FormControl
        color={color}
        error={error}
        required={required}
        fullWidth={fullWidth}>
        {label && <FormLabel>{label}</FormLabel>}
        <InputBase placeholder={placeholder} inputRef={ref} inputProps={others} />
        {Boolean(helperText) && (
          <FormHelperText variant="standard">{helperText}</FormHelperText>
        )}
      </FormControl>
    </FieldWraper>
  );
});

OutlineInputField.propTypes = {
  label: PropTypes.string.isRequired,
  startIcon: PropTypes.elementType,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.any,
  required: PropTypes.bool,
  name: PropTypes.string,
  error: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(["primary", "secondary", "error", "info", "success", "warning"]),
    PropTypes.string,
  ]),
};

OutlineInputField.defaultProps = {
  label: "",
  error: false,
  required: false,
  fullWidth: true,
  placeholder: "Enter here",
  color: "primary",
};

export default OutlineInputField;
