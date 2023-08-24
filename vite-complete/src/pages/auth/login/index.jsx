import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { RoundedButton } from "components/material-ui/buttons";
import { OutlineLabelInputField } from "components/material-ui/inputs";
import { ResponseLoader } from "components/modules/loaders";
import { FieldController } from "components/__controllers";

import { LogInIcon } from "assets/icons";

import { useUserRedux } from "store/redux/user";

import { attemptLogin } from "services/rest-api/auth";


import { Container, FormWraper, Title } from "./_styles";

function Login() {
  const { setLogIn } = useUserRedux();

  const { status, mutate } = useMutation(attemptLogin, {
    onSuccess: ({ user, token }) => {
      localStorage.setItem(import.meta.env.VITE_LOCAL_DB_TOKEN_KEY, token);
      setLogIn(user);
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
    [mutate],
  );

  if (status === "loading" || status === "success") {
    return <ResponseLoader />;
  }

  return (
    <Container>
      <Title>Log In</Title>
      <FormWraper onSubmit={handleSubmit(onSubmit)}>
        <FieldController
          name="username"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide username",
            },
          }}>
          <OutlineLabelInputField label="Username" />
        </FieldController>
        <FieldController
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide password",
            },
          }}>
          <OutlineLabelInputField label="Password" />
        </FieldController>
        <RoundedButton
          fullWidth
          size="large"
          type="submit"
          color="primary"
          variant="contained"
          startIcon={<LogInIcon />}>
          Log In
        </RoundedButton>
      </FormWraper>
    </Container>
  );
}

export default Login;
