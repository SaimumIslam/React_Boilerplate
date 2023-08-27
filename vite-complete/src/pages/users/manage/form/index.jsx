import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { FieldController } from "components/__controllers";
import { ManageAction } from "components/modules/actions";
import { ResponseLoader } from "components/modules/loaders";
import { OutlineInputField } from "components/material-ui/inputs";
import { OutlineSelectField } from "components/material-ui/selects";

import useNavigation from "hooks/useNavigation";

import handleFormError from "services/error-handling/form-error";
import { createUser, updateUser } from "services/rest-api/users";
import { CREATE_UPDATE_SORT_BY } from "data/search";

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
          <OutlineInputField
            label="Email"
            type="email"
            // readOnly={Boolean(is_update)}
          />
        </FieldController>
        <FieldController
          name="order_by"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide first name",
            },
          }}>
          <OutlineSelectField items={CREATE_UPDATE_SORT_BY} label="Sort By" />
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
          <OutlineInputField label="First Name" />
        </FieldController>
        <FieldController name="last_name" control={control}>
          <OutlineInputField label="Last Name" />
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
          <OutlineInputField label="Mobile Number" type="tel" />
        </FieldController>
        <FieldController name="address" control={control}>
          <OutlineInputField label="Address" />
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
