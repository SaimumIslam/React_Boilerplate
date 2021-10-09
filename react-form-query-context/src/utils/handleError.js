import Swal from 'sweetalert2';
import { removeUserStorage, removeTokenStorage } from './handle-local-storage';

const swarConfig = { icon: 'error', confirmButtonText: 'Ok' };

const handleError = (status, data) => {
  switch (status) {
    case 400:
      Swal.fire({
        title: `Bad Request`,
        text: 'Please provide valid information',
        ...swarConfig,
      });
      break;
    case 401:
      Swal.fire({
        title: `You're unauthenticated!`,
        text: 'Please provide valid information',
        ...swarConfig,
      });
      break;
    case 403:
      Swal.fire({
        title: `You're unauthorized!`,
        text: 'Please contact with admin',
        ...swarConfig,
      }).then(() => {
        removeTokenStorage();
        removeUserStorage();
        Swal.fire('Your session ended', 'Please login again.', 'success');
      });
      break;
    case 404:
      Swal.fire({
        title: `Client error!!`,
        text: 'Something went wrong, please contact admin',
        ...swarConfig,
      });
      break;
    case 500:
      Swal.fire({
        title: `Internal server error!!`,
        text: 'something went wrong, please contact admin',
        ...swarConfig,
      });
      break;
    case undefined:
      break;
    default:
      Swal.fire({
        title: `Unknown Error!!`,
        text: 'Report to your admin',
        ...swarConfig,
      });
  }
};

export default handleError;
