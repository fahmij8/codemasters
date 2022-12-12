import { Toast } from '@workday/canvas-kit-react/toast';
import type { ToastProps } from '@workday/canvas-kit-react/toast';

export default function Toaster({
  open,
  toastProps,
  children,
}: {
  open: boolean;
  toastProps?: Omit<ToastProps, 'children'>;
  children: string;
}) {
  return (
    <Toast
      {...toastProps}
      position='absolute'
      top='20px'
      right='30px'
      transform='none'
    >
      {children}
    </Toast>
  );
}
