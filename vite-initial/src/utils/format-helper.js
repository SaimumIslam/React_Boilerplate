import { convertIfNumber } from "utils/transform-helper";

export const formatSearchData = (input_data) => {
  const search_data = {};

  for (const [key, value] of Object.entries(input_data)) {
    if (Array.isArray(value)) search_data[key] = value?.toString();
    else if (Boolean(value) || value === 0)
      search_data[key] = convertIfNumber(value);
  }
  return search_data;
};

export const formatTwoDigit = (number) => String(number).padStart(2, "0");
