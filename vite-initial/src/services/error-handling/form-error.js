const handleFormError = (error, setFieldError) => {
  const { status, message } = error?.response || {};

  if (status === 400) {
    for (let [key, value] of Object.entries(message)) {
      setFieldError(key, {
        type: "manual",
        message: value,
      });
    }
  }
};

export default handleFormError;
