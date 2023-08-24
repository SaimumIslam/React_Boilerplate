import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const FieldController = forwardRef((props, ref) => {
  const { children, rules, ...others } = props;
  const required = Boolean(rules?.required);
  return (
    <Controller
      ref={ref}
      render={({ field, fieldState: { error } }) => (
        <>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              ...field,
              error: Boolean(error),
              helperText: error?.message,
              required: required,
            }),
          )}
        </>
      )}
      rules={rules}
      {...others}
    />
  );
});

FieldController.propTypes = {
  children: PropTypes.node,
  rules: PropTypes.object,
};

export default FieldController;
