import React from "react";
import PropTypes from "prop-types";

import { CheckIcon, CloseIcon } from "assets/icons";
import { RoundedButton } from "components/material/buttons";

import { Container } from "./elements";

const ManageAction = ({
  onSubmit,
  onCancel,
  is_update,
  submit_text,
  disabled,
}) => {
  return (
    <Container>
      <RoundedButton
        type="submit"
        color="primary"
        variant="contained"
        startIcon={<CheckIcon />}
        onClick={onSubmit}
        disabled={disabled}
      >
        {is_update ? "Update" : submit_text}
      </RoundedButton>
      <RoundedButton
        color="primary"
        variant="outlined"
        startIcon={<CloseIcon />}
        onClick={onCancel}
      >
        Cancel
      </RoundedButton>
    </Container>
  );
};

ManageAction.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  is_update: PropTypes.bool,
  submit_text: PropTypes.string,
};

ManageAction.defaultProps = {
  is_update: false,
  submit_text: "Save",
};
export default ManageAction;
