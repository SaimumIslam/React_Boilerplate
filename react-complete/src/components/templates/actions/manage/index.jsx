import React from "react";
import PropTypes from "prop-types";

import { CheckIcon, CloseIcon } from "assets/icons";
import { RoundedButton } from "components/material/buttons";

import { ActionContainer } from "./elements";

const ManageAction = ({
  onSubmit,
  onCancel,
  isUpdate,
  submitText,
  disabled,
}) => {
  return (
    <ActionContainer>
      <RoundedButton
        type="submit"
        color="primary"
        variant="contained"
        startIcon={<CheckIcon />}
        onClick={onSubmit}
        disabled={disabled}
      >
        {isUpdate ? "Update" : submitText}
      </RoundedButton>
      <RoundedButton
        color="primary"
        variant="outlined"
        startIcon={<CloseIcon />}
        onClick={onCancel}
      >
        Cancel
      </RoundedButton>
    </ActionContainer>
  );
};

ManageAction.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool,
  submitText: PropTypes.string,
};

ManageAction.defaultProps = {
  isUpdate: false,
  submitText: "Save",
};
export default ManageAction;
