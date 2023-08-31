import { forwardRef } from "react";
import PropTypes from "prop-types";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import { Checkbox, FieldWraper, FormLabel } from "./_styles";

const BaseCheckbox = forwardRef((props, ref) => {
  const { label, error, value, required, fullWidth, helperText, ...others } = props;

  return (
    <FormControl error={error} required={required} fullWidth={fullWidth}>
      <FieldWraper>
        <Checkbox ref={ref} checked={value} {...others} />
        {label && <FormLabel>{label}</FormLabel>}
      </FieldWraper>
      {Boolean(helperText) && (
        <FormHelperText variant="standard">{helperText}</FormHelperText>
      )}
    </FormControl>
  );
});

BaseCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.any,
  required: PropTypes.bool,
  name: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(["primary", "secondary", "error", "info", "success", "warning"]),
    PropTypes.string,
  ]),
};

BaseCheckbox.defaultProps = {
  label: "",
  error: false,
  required: false,
  fullWidth: true,
  placeholder: "Enter here",
};

export default BaseCheckbox;
