import { toast } from "react-toastify";
import ErrorToast from "./ErrorToast";
import SuccessToast from "./SuccessToast";

let toastId = null;

const defaultSettings = {
  autoClose: 3000,
  icon: true,
  onClose: () => {
    toastId = null;
  },
};

const makeToast = (type, content, moreSettings) => {
  const settings = { ...defaultSettings, ...moreSettings, type };
  if (toastId) toast.dismiss(toastId);
  toastId = toast(content, settings);
};

export const dismissToast = () => {
  if (toastId) {
    toast.dismiss(toastId);
    toastId = null;
  }
};

export const toastError = (message) => {
  makeToast(toast.error, <ErrorToast message={message} />, {
    autoClose: false,
  });
};

export const toastSuccess = (message) => {
  makeToast(toast.success, <SuccessToast message={message} />);
};
