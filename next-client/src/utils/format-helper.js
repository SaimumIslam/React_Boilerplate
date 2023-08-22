export const formatErrorText = (message) => {
  if (Array.isArray(message)) return message[0];
  else if (typeof message === "object") return text?.detail;
  else return message;
};
