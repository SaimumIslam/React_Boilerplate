import { forwardRef } from "react";
import PropTypes from "prop-types";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import { FieldWraper, FormLabel, IconWraper, InputBase } from "./_styles";

const OutlineInputField = forwardRef((props, ref) => {
  const {
    label,
    error,
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
          <Icon color="primary" />
        </IconWraper>
      )}
      <FormControl error={error} required={required} fullWidth={fullWidth}>
        {label && <FormLabel>{label}</FormLabel>}
        <InputBase placeholder={placeholder} inputRef={ref} {...others} />
        {Boolean(helperText) && (
          <FormHelperText variant="standard">{helperText}</FormHelperText>
        )}
      </FormControl>
    </FieldWraper>
  );
});

OutlineInputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.any,
  startIcon: PropTypes.any,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

OutlineInputField.defaultProps = {
  label: "",
  required: false,
  fullWidth: true,
  placeholder: "Enter here",
};

export default OutlineInputField;
