import type { Dispatch, RefObject, ReactNode } from 'react';
import type { ToastProps } from '@workday/canvas-kit-react';

export interface StructInitialContext {
  code: {
    html: string;
    css: string;
    js: string;
    full: string;
  };
  taskFinished: number;
}

type ActionTypes = 'SET_HTML' | 'SET_CSS' | 'SET_JS' | 'SET_FULL' | 'SET_TASK';

type Distribute<T> = T extends any ? { type: T; payload?: any } : never;

export type ActionContext = Distribute<ActionTypes>;

export interface StructContext extends StructInitialContext {
  dispatch: Dispatch<ActionContext>;
}

export interface AppToastProps extends Omit<ToastProps, 'children'> {
  id: string;
  variant: 'success' | 'error' | 'warning';
  message: string;
}

export interface AppModalProps {
  title: string;
  children: ReactNode;
  elementRef?: RefObject<HTMLDivElement>;
  agreeWord: string;
  withCancel?: boolean;
  cancelWord?: string;
  open?: boolean;
  onHide?: () => void;
}
