import Swal from "sweetalert2";

const swarConfig = {
  icon: "info",
  confirmButtonText: "Ok",
  allowEscapeKey: false,
  allowOutsideClick: false,
};

const handleErrorCustom = async (status, message) => {
  let flag = false;
  switch (status) {
    case 400:
      Swal.fire({
        title: `Bad Request`,
        text: message || "Please provide valid information",
        ...swarConfig,
      });
      break;
    case 401:
      Swal.fire({
        title: `You're unauthenticated!`,
        text: message || "Please provide valid information",
        ...swarConfig,
      });
      break;
    case 402:
      Swal.fire({
        title: `Payment required!`,
        text: message || "Please pay first",
        ...swarConfig,
      });
      break;
    case 403:
      flag = await Swal.fire({
        title: `You have no access to this page!`,
        text: "Please contact with admin",
        ...swarConfig,
      });
      if (flag) window.location.replace("/");
      break;
    case 404:
      Swal.fire({
        title: `Resource unavailable`,
        text: message || "Something went wrong!! Please try with valid data",
        ...swarConfig,
      });
      break;
    case 405:
      flag = await Swal.fire({
        title: `Request method not allowed`,
        text: "Something went wrong!! Please contact admin",
        ...swarConfig,
      });
      if (flag) window.location.reload();
      break;
    case 408:
      Swal.fire({
        title: `Request Timeout`,
        text: message || "Please try again",
        ...swarConfig,
      });
      break;
    case 500:
      Swal.fire({
        title: `Internal server error!!`,
        text: message || "something went wrong, please contact admin",
        ...swarConfig,
      });
      break;
    case 409:
      Swal.fire({
        title: `Conflict!!`,
        text: message || "Already exists",
        ...swarConfig,
      });
      break;
    case 503:
      Swal.fire({
        title: `Service Unavailable`,
        text: message || "Please wait.try some later",
        ...swarConfig,
      });
      break;
    default:
      Swal.fire({
        title: `Network failure.`,
        text: message || "Please check your connection",
        ...swarConfig,
      });
  }
};

export default handleErrorCustom;
