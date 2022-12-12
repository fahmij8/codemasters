import { useEffect } from 'react';
import { Modal as ModalCanvas } from '@workday/canvas-kit-react/modal';
import { PrimaryButton } from '@workday/canvas-kit-react/button';
import { HStack, Box } from '@workday/canvas-kit-react/layout';
import type { AppModalProps } from 'types';

export default function Modal({
  title,
  children,
  elementRef,
  agreeWord,
  withCancel,
  cancelWord,
  open,
  onHide,
}: AppModalProps) {
  useEffect(() => {
    if (elementRef?.current) {
      if (open) {
        elementRef.current.click();
      }
    }
  }, [open, elementRef]);

  return (
    <ModalCanvas initialVisibility='hidden' onHide={onHide}>
      <ModalCanvas.Target
        ref={elementRef}
        as='div'
        style={{ display: 'none' }}
      />
      <ModalCanvas.Overlay>
        <ModalCanvas.Card>
          <ModalCanvas.CloseIcon aria-label='Close' />
          <ModalCanvas.Heading>{title}</ModalCanvas.Heading>
          <ModalCanvas.Body>
            <Box as='p' marginY='zero'>
              {children}
            </Box>
          </ModalCanvas.Body>
          <HStack spacing='s' padding='xxs' marginTop='xxs'>
            <ModalCanvas.CloseButton as={PrimaryButton}>
              {agreeWord}
            </ModalCanvas.CloseButton>
            {withCancel && (
              <ModalCanvas.CloseButton>{cancelWord}</ModalCanvas.CloseButton>
            )}
          </HStack>
        </ModalCanvas.Card>
      </ModalCanvas.Overlay>
    </ModalCanvas>
  );
}
