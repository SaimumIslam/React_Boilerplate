import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { FieldController } from "components/__controllers";
import { ResponseLoader } from "components/modules/loaders";
import { RoundedButton } from "components/material-ui/buttons";
import { OutlineInputField } from "components/material-ui/inputs";

import { LogInIcon } from "assets/icons";

import { useUserRedux } from "store/redux/user";
import { attemptLogin } from "services/rest-api/auth";

import { Container, FormWraper, Title } from "./_styles";

function Login() {
  const { setLogIn } = useUserRedux();

  const { isPending, mutate } = useMutation({
    mutationFn: attemptLogin,
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

  if (isPending) {
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
          <OutlineInputField label="Username" />
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
          <OutlineInputField label="Password" />
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
