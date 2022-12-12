import { ModalContext } from 'context';
import { useContext } from 'react';

export default function useModal() {
  const modalContext = useContext(ModalContext);
  if (!modalContext) {
    throw new Error('ModalContext is not defined');
  }
  return modalContext;
}
