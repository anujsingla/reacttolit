import "react-toastify/dist/ReactToastify.min.css";
import "../css/toastNotification.css";

import { Alert, AlertActionCloseButton } from "@patternfly/react-core";
import React from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";

export enum ToastType {
  DANGER = "danger",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
}

interface IProps {
  variant: ToastType;
  message: React.ReactNode;
  alertActions?: any;
  closeToast?: () => void;
  children?: React.ReactNode;
}

const AlertComponent = ({
  variant,
  message,
  alertActions = {},
  closeToast,
  children,
}: IProps) => {
  return (
    <Alert
      variant={variant}
      title={message}
      actionClose={<AlertActionCloseButton onClose={closeToast} />}
    >
      {children}
    </Alert>
  );
};

const defaultCloseMs = 8000;

const defaultToastOptions = { autoClose: defaultCloseMs };

class ToastNotification {
  public static addDangerMessage(
    message: React.ReactNode,
    alertBody?: React.ReactNode,
    options: ToastOptions = {}
  ) {
    return toast(
      ({ closeToast }) => (
        <AlertComponent
          variant={ToastType.DANGER}
          message={message}
          closeToast={closeToast}
        >
          {alertBody}
        </AlertComponent>
      ),
      { ...options }
    );
  }

  // removed  options: ToastOptions = defaultToastOptions to fix auto-dismissing of success alerts.
  public static addSuccessMessage(
    message: React.ReactNode,
    alertBody?: React.ReactNode,
    options: ToastOptions = defaultToastOptions
  ) {
    return toast(
      ({ closeToast }) => (
        <AlertComponent
          variant={ToastType.SUCCESS}
          message={message}
          closeToast={closeToast}
        >
          {alertBody}
        </AlertComponent>
      ),
      { ...options }
    );
  }

  public static addWarningMessage(message, options: ToastOptions = {}) {
    return toast(
      ({ closeToast }) => (
        <AlertComponent
          variant={ToastType.WARNING}
          message={message}
          closeToast={closeToast}
        />
      ),
      { ...options }
    );
  }

  public static addInfoMessage(
    message,
    options: ToastOptions = defaultToastOptions
  ) {
    return toast(
      ({ closeToast }) => (
        <AlertComponent
          variant={ToastType.INFO}
          message={message}
          closeToast={closeToast}
        />
      ),
      { ...options }
    );
  }

  public static clearAll() {
    toast.dismiss();
  }

  public static clearToast(toastId) {
    toast.dismiss(toastId);
  }
}

export { ToastContainer, ToastNotification };
