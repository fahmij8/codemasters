import { createElement, createContext, useContext, useReducer } from 'react';
import reducer from './reducer';
import initialContext from './initial';

import type { ReactNode } from 'react';
import type { StructContext } from 'types';

const getInitialContext = () => initialContext;
const codemastersContext = createContext<StructContext>({
  ...getInitialContext(),
  dispatch: () => {},
});
const useCodemastersContext = () => useContext(codemastersContext);

interface CodemastersProviderProps {
  children: ReactNode;
}

const CodemastersProvider = ({ children }: CodemastersProviderProps) => {
  const [state, dispatch] = useReducer(reducer, getInitialContext());

  const value = {
    ...state,
    dispatch,
  };

  if (process.env.NODE_ENV === 'development') console.log('Context:', value);

  return createElement(codemastersContext.Provider, { value }, children);
};

export { CodemastersProvider, useCodemastersContext };
