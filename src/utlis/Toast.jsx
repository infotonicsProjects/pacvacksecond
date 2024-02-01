import { toast } from "react-toastify";

export const ToastSuccess = (text) => {
  return toast.success(text);
};

export const ToastError = (text) => {
  return toast.error(text);
};

export const ToastColor = (text) => {
  return toast(text);
};
