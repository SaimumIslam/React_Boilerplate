import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const LabeledInputField = forwardRef((props, ref) => {
  const { label, error, required, helperText, placeholder, ...others } = props;

  return (
    <div>
      <h6>
        {label}
        {required && <small>*</small>}
      </h6>
      <input
        placeholder={placeholder}
        inputRef={ref}
        error={error}
        {...others}
      />
      {Boolean(helperText) && <span error={error}>{helperText}</span>}
    </div>
  );
});

LabeledInputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  helperText: PropTypes.any,
};

LabeledInputField.defaultProps = {
  required: false,
  placeholder: "Enter here",
};

export default LabeledInputField;
