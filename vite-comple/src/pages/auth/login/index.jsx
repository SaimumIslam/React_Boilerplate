import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { FieldController } from "components/__controllers";
import { RoundedButton } from "components/material-ui/buttons";
import { OutlineInputField } from "components/material-ui/inputs";
import { ResponseLoader } from "components/widgets/loaders";

import { LogInIcon } from "assets/icons";

import { attemptLogin } from "services/rest-api/auth";
import useUserStore from "store/user";

import UserStore from "helpers/user-store";

import { Container, FormWraper, Title } from "./_styles";

function Login() {
  const userStore = new UserStore();
  const { setLogIn } = useUserStore();

  const { isPending, mutate } = useMutation({
    mutationFn: attemptLogin,
    onSuccess: ({ user, token }) => {
      setLogIn(token);
      userStore.set(user);
    },
  });

  const defaultValues = { username: "", password: "" };

  const { control, handleSubmit } = useForm({ defaultValues: defaultValues });

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
          rules={{ required: { value: true, message: "Please provide username" } }}>
          <OutlineInputField label="Username" />
        </FieldController>
        <FieldController
          name="password"
          control={control}
          rules={{ required: { value: true, message: "Please provide password" } }}>
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
