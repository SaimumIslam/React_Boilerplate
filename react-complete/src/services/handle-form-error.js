import handleError from "services/handle-error";

const handleFormError = (setError, error) => {
  const { status, data } = error?.response || {};

  if (status === 400) {
    for (let [key, value] of Object.entries(data)) {
      setError(key, {
        type: "manual",
        message: value,
      });
    }
  } else handleError(status, data);
};

export default handleFormError;
