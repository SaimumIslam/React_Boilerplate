export const formatErrorText = (text) => {
  if (Array.isArray(text)) {
    return text[0];
  } else if (typeof text === "object") return text?.detail;
  return text;
};
