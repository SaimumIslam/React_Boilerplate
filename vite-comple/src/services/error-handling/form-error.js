import handleFetchError from "./fetch-error";

const handleFormError = (error, setFieldError) => {
  const { status_code, message } = error?.response || {};

  if (status_code === 400 && typeof message === "object") {
    for (let [f_key, f_error] of Object.entries(message)) {
      setFieldError(f_key, {
        type: "manual",
        message: f_error,
      });
    }
  } else handleFetchError(error);
};

export default handleFormError;
