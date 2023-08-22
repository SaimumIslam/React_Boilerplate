const handleFormError = (error, setFieldError) => {
  const { status, data } = error?.response || {};

  if (status === 400) {
    for (let [key, value] of Object.entries(data)) {
      setFieldError(key, {
        type: "manual",
        message: value,
      });
    }
  }
};

export default handleFormError;
