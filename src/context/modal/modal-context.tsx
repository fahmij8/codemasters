import { useCallback, useState, createContext, useRef } from 'react';
import Modal from 'components/Modal';
import type { ReactNode } from 'react';
import type { AppModalProps } from 'types';

export const ModalContext = createContext({
  open: (modal: AppModalProps) => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [modal, setModal] = useState<AppModalProps | null>(null);

  const open = useCallback(
    function (modal: AppModalProps) {
      setModal(modal);
    },
    [setModal]
  );

  return (
    <ModalContext.Provider value={{ open }}>
      {children}
      {modal && (
        <Modal
          elementRef={elementRef}
          title={modal.title}
          agreeWord={modal.agreeWord}
          withCancel={modal.withCancel}
          cancelWord={modal.cancelWord}
          open
          onHide={() => setModal(null)}
        >
          {modal.children}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};
