import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { FieldController } from "components/__controllers";
import { OutlineLabelInputField } from "components/material-ui/inputs";
import { ManageAction } from "components/modules/actions";
import { ResponseLoader } from "components/modules/loaders";

import useNavigation from "hooks/useNavigation";

import handleFormError from "services/error-handling/form-error";
import { createUser, updateUser } from "services/rest-api/users";

import { FormContainer, FormFlexRow } from "./_styles";

function Form({ instance, is_update }) {
  const apiFunction = is_update ? updateUser : createUser;
  const success_message = is_update
    ? "People successfully updated"
    : "People successfully created";

  const { enqueueSnackbar } = useSnackbar();
  const { setPath, primary_pathname } = useNavigation();

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

  const { isLoading, mutate } = useMutation(apiFunction, {
    onError: (error) => {
      handleFormError(error, setError);
    },
    onSuccess: (data) => {
      enqueueSnackbar(success_message, { variant: "success" });
      setPath(`/${primary_pathname}/${data?.id}`);
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const handleCancel = (event) => {
    reset(defaultValues);
  };

  if (isLoading) return <ResponseLoader />;

  return (
    <FormContainer>
      <FormFlexRow>
        <FieldController
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
          }}>
          <OutlineLabelInputField
            label="Email"
            type="email"
            // readOnly={Boolean(is_update)}
          />
        </FieldController>
        <FieldController
          name="secondary_email"
          control={control}
          rules={{
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email",
            },
          }}>
          <OutlineLabelInputField label="Secondary Email" type="email" />
        </FieldController>
      </FormFlexRow>
      <FormFlexRow>
        <FieldController
          name="first_name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide first name",
            },
          }}>
          <OutlineLabelInputField label="First Name" />
        </FieldController>
        <FieldController name="last_name" control={control}>
          <OutlineLabelInputField label="Last Name" />
        </FieldController>
      </FormFlexRow>
      <FormFlexRow>
        <FieldController
          name="mobile"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide mobile number",
            },
          }}>
          <OutlineLabelInputField label="Mobile Number" type="tel" />
        </FieldController>
        <FieldController name="address" control={control}>
          <OutlineLabelInputField label="Address" />
        </FieldController>
      </FormFlexRow>
      <ManageAction
        onSubmit={handleSubmit(onSubmit)}
        onCancel={handleCancel}
        is_update={is_update}
      />
    </FormContainer>
  );
}
Form.propTypes = {
  instance: PropTypes.object,
  is_update: PropTypes.bool,
};

Form.defaultProps = {
  instance: {},
  is_update: false,
};

export default Form;
