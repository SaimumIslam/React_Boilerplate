import React from "react";
import PropTypes from "prop-types";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { FormController } from "components/hoc";
import { ManageAction } from "components/templates/actions";
import { ResponseLoader } from "components/templates/loaders";
import { OutlineLabelInputField } from "components/material/inputs";

import useNavigation from "hooks/useNavigation";
import handleFormError from "services/handle-form-error";
import { createUser, updateUser } from "services/api/users";

import { FormWraper, FormFlexRow, FormContainer } from "./elements";

function Form({ instance, isUpdate }) {
  const apiFunction = isUpdate ? updateUser : createUser;
  const successMessage = isUpdate
    ? "People successfully updated"
    : "People successfully created";

  const { enqueueSnackbar } = useSnackbar();
  const { setPath, primaryPath } = useNavigation();

  const defaultValues = {
    id: instance?.id,
    email: instance?.email || "",
    first_name: instance?.first_name || "",
    last_name: instance?.last_name || "",
    address: instance?.address || "",
    mobile: instance?.mobile || "",
  };

  const { reset, control, setError, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const { status, mutate } = useMutation(apiFunction, {
    onError: (error) => {
      handleFormError(setError, error);
    },
    onSuccess: (data) => {
      enqueueSnackbar(successMessage, { variant: "success" });
      setPath(`/${primaryPath}/${data?.id}`);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const handleCancel = (event) => {
    reset(defaultValues);
  };

  if (status === "loading" || status === "success") return <ResponseLoader />;

  return (
    <FormContainer>
      <FormWraper>
        <FormFlexRow>
          <FormController
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide email",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            }}
          >
            <OutlineLabelInputField
              label="Email"
              type="email"
              readOnly={Boolean(isUpdate)}
            />
          </FormController>
          <FormController
            name="secondary_email"
            control={control}
            rules={{
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email",
              },
            }}
          >
            <OutlineLabelInputField label="Secondary Email" type="email" />
          </FormController>
        </FormFlexRow>
        <FormFlexRow>
          <FormController
            name="first_name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide first name",
              },
            }}
          >
            <OutlineLabelInputField label="First Name" />
          </FormController>
          <FormController name="last_name" control={control}>
            <OutlineLabelInputField label="Last Name" />
          </FormController>
        </FormFlexRow>
        <FormFlexRow>
          <FormController
            name="mobile"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please provide mobile number",
              },
            }}
          >
            <OutlineLabelInputField label="Mobile Number" type="tel" />
          </FormController>
          <FormController name="address" control={control}>
            <OutlineLabelInputField label="Address" />
          </FormController>
        </FormFlexRow>
      </FormWraper>
      <ManageAction
        onSubmit={handleSubmit(onSubmit)}
        onCancel={handleCancel}
        isUpdate={isUpdate}
      />
    </FormContainer>
  );
}
Form.propTypes = {
  instance: PropTypes.object,
  isUpdate: PropTypes.bool,
};

Form.defaultProps = {
  instance: {},
  isUpdate: false,
};

export default Form;
