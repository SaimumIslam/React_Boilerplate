import { forwardRef } from "react";
import PropTypes from "prop-types";

import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import { AngleDownIcon } from "assets/icons";

import {
  FieldWraper,
  FormLabel,
  IconWraper,
  InputBase,
  NativeSelect,
  SelectOption,
} from "./_styles";

const OutlineSelectField = forwardRef((props, ref) => {
  const {
    items,
    label,
    error,
    value,
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
        {Boolean(label) && <FormLabel>{label}</FormLabel>}
        <NativeSelect
          ref={ref}
          input={<InputBase />}
          value={value || ""}
          IconComponent={AngleDownIcon}
          {...others}>
          <SelectOption value="" disabled={required}>
            {placeholder}
          </SelectOption>
          {items.map(({ value, title }, index) => (
            <SelectOption value={value} key={index}>
              {title}
            </SelectOption>
          ))}
        </NativeSelect>
        <FormHelperText variant="standard">{helperText}</FormHelperText>
      </FormControl>
    </FieldWraper>
  );
});

OutlineSelectField.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  startIcon: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
  ).isRequired,
};

OutlineSelectField.defaultProps = {
  items: [],
  label: "",
  error: false,
  required: false,
  fullWidth: true,
  placeholder: "Choose a option",
};
export default OutlineSelectField;
