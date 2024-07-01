import { toastSuccess } from "../components/UI/Toast/Toast";

export const copyTextToClipboard = async (textToCopy, toastMessage) => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    if (toastMessage) toastSuccess(toastMessage);
  } catch (error) {
    return null;
  }
};
