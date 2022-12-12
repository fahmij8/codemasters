import Toaster from 'components/Toaster';
import { useCallback, useState, createContext } from 'react';
import { exclamationCircleIcon } from '@workday/canvas-system-icons-web';
import { colors } from '@workday/canvas-kit-react/tokens';
import type { ReactNode } from 'react';
import type { AppToastProps } from 'types';

export const ToastContext = createContext({
  open: (toast: AppToastProps) => {},
  remove: (id: string) => {},
  allToast: [] as AppToastProps[],
});

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<AppToastProps[]>([]);

  const open = useCallback(
    function (toast: AppToastProps) {
      setToasts((toasts: AppToastProps[]) => [...toasts, toast]);

      // Remove toast after 3 seconds
      setTimeout(() => setToasts((toasts) => toasts.slice(1)), 3000);
    },
    [setToasts]
  );
  const remove = useCallback((id: string) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ open, remove, allToast: toasts }}>
      {children}
      {toasts.length > 0 &&
        toasts.map((eachToast) => (
          <Toaster
            key={eachToast.id}
            open
            toastProps={{
              ...eachToast,
              onClose: () => remove(eachToast.id),
              icon:
                eachToast.variant === 'error'
                  ? exclamationCircleIcon
                  : undefined,
              iconColor:
                eachToast.variant === 'error'
                  ? colors.cinnamon500
                  : colors.greenApple300,
            }}
          >
            {eachToast.message}
          </Toaster>
        ))}
    </ToastContext.Provider>
  );
};
