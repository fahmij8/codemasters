import type { Dispatch } from 'react';

export interface StructInitialContext {
  code: {
    html: string;
    css: string;
    js: string;
  };
}

type ActionTypes = 'SET_HTML' | 'SET_CSS' | 'SET_JS';

type Distribute<T> = T extends any ? { type: T; payload?: any } : never;

export type ActionContext = Distribute<ActionTypes>;

export interface StructContext extends StructInitialContext {
  dispatch: Dispatch<ActionContext>;
}
