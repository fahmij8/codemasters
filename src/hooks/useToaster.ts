import { ToastContext } from 'context';
import { useContext } from 'react';

export default function useToaster() {
  const toaster = useContext(ToastContext);
  if (!toaster) {
    throw new Error('useToaster must be used within a ToasterProvider');
  }
  return toaster;
}
