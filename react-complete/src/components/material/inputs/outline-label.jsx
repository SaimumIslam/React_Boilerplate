import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import { InputBase, InputLabel, IconWraper, FieldWraper } from "./elements";

const OutlineLabelInputField = forwardRef((props, ref) => {
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
      <FormControl
        variant="standard"
        error={error}
        required={required}
        fullWidth={fullWidth}
      >
        <InputLabel shrink htmlFor="outlined-input">
          {label}
        </InputLabel>
        <InputBase
          id="outlined-input"
          placeholder={placeholder}
          inputRef={ref}
          {...others}
        />
        <FormHelperText id="outlined-input">{helperText}</FormHelperText>
      </FormControl>
    </FieldWraper>
  );
});

OutlineLabelInputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.any,
  startIcon: PropTypes.any,
  required: PropTypes.bool,
};

OutlineLabelInputField.defaultProps = {
  required: false,
  fullWidth: true,
  placeholder: "Enter here",
};

export default OutlineLabelInputField;
