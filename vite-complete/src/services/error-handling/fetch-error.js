const handleFetchError = (error) => {
  const { status_code, message } = error?.response || {};

  switch (status_code) {
    case 400:
      // eslint-disable-next-line no-console
      console.log(message);
      break;
    case 401:
      break;
    case 402:
      break;
    case 403:
      break;
    case 404:
      break;
    case 405:
      break;
    case 408:
      break;
    case 409:
      break;
    case 500:
      break;
    case 503:
      break;
    default:
  }
};

export default handleFetchError;
