import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";

const FormController = forwardRef((props, ref) => {
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
            })
          )}
        </>
      )}
      rules={rules}
      {...others}
    />
  );
});

export default FormController;
