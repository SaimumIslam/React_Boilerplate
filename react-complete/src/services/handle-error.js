import Swal from "sweetalert2";

import { formatErrorText } from "utils/formating";
import { removeUserStorage, removeTokenStorage } from "utils/local-storage";

const ALERT_CONFIG = {
  icon: "info",
  confirmButtonText: "Ok",
  allowEscapeKey: false,
  allowOutsideClick: false,
};

const handleError = async (status, message, alerts = {}) => {
  const search = new URLSearchParams(window.location.search);
  const source = search.get("source");

  message = formatErrorText(message);

  alerts[404] = {
    title: source === "notification" && "Notification Expired!",
  };

  let flag = false;

  switch (status) {
    case 400:
      Swal.fire({
        title: alerts[400]?.title || `Bad Request`,
        text:
          alerts[400]?.text || message || "Please provide valid information",
        ...ALERT_CONFIG,
      });
      break;
    case 401:
      flag = await Swal.fire({
        title: `You're unauthorized!`,
        text: message || "Please provide valid information",
        ...ALERT_CONFIG,
      });
      removeTokenStorage();
      removeUserStorage();
      if (flag) window.location.replace("/login");
      break;
    case 402:
      Swal.fire({
        title: `Payment required!`,
        text: message || "Please pay first",
        ...ALERT_CONFIG,
      });
      break;
    case 403:
      flag = await Swal.fire({
        title: `You have no access to this page!`,
        text: "Please contact with admin",
        ...ALERT_CONFIG,
      });
      if (flag) window.location.replace("/");
      break;
    case 404:
      Swal.fire({
        title: alerts[404]?.title || `Resource unavailable`,
        text: alerts[404]?.text || message || "Please try with valid data",
        ...ALERT_CONFIG,
      });
      break;
    case 405:
      Swal.fire({
        title: `Request method not allowed`,
        text: message || "Something went wrong! Please contact admin",
        ...ALERT_CONFIG,
      });
      break;
    case 408:
      Swal.fire({
        title: `Request Timeout`,
        text: message || "Please try again",
        ...ALERT_CONFIG,
      });
      break;
    case 409:
      Swal.fire({
        title: alerts[409]?.title || `Conflict!!`,
        text: alerts[409]?.text || message || "Already exists",
        ...ALERT_CONFIG,
      });
      break;
    case 500:
      Swal.fire({
        title: `Internal server error!!`,
        text: message || "something went wrong! Please contact admin",
        ...ALERT_CONFIG,
      });
      break;
    case 503:
      Swal.fire({
        title: `Service Unavailable`,
        text: message || "Please wait.try some later",
        ...ALERT_CONFIG,
      });
      break;
    default:
      Swal.fire({
        title: `Network failure.`,
        text: message || "Please check your connection",
        ...ALERT_CONFIG,
      });
  }
};

export default handleError;
