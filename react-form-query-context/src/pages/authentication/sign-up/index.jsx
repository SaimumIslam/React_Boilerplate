import React, { useCallback } from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

import { FormController } from "components/hoc";
import { LabeledInputField } from "components/core/inputs";

import { createUser } from "services/api/user";
import useNavigation from "hooks/useNavigation";

function SignUp() {
  const { setPath } = useNavigation();

  const { status, mutate } = useMutation(createUser, {
    onSuccess: (data) => {
      setPath("/");
    },
  });

  const defaultValues = {
    username: "",
    password: "",
  };

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = useCallback(
    (value) => {
      mutate(value);
    },
    [mutate]
  );

  if (status === "loading" || status === "success") {
    return <span>{status}</span>;
  }

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormController
          name="username"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide username",
            },
          }}
        >
          <LabeledInputField label="Username" />
        </FormController>
        <FormController
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide password",
            },
          }}
        >
          <LabeledInputField label="Password" type="password" />
        </FormController>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
