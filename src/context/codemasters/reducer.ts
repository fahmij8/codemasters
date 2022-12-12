import type { ActionContext, StructInitialContext } from 'types';

const caseReducer = {
  SET_HTML: (state: StructInitialContext, payload: string) => ({
    ...state,
    code: {
      ...state.code,
      html: payload,
    },
  }),
  SET_CSS: (state: StructInitialContext, payload: string) => ({
    ...state,
    code: {
      ...state.code,
      css: payload,
    },
  }),
  SET_JS: (state: StructInitialContext, payload: string) => ({
    ...state,
    code: {
      ...state.code,
      js: payload,
    },
  }),
  SET_FULL: (state: StructInitialContext, payload: string) => ({
    ...state,
    code: {
      ...state.code,
      full: payload,
    },
  }),
  SET_TASK: (state: StructInitialContext, payload: string) => ({
    ...state,
    taskFinished: Number(payload),
  }),
};

const reducer = (state: StructInitialContext, action: ActionContext) => {
  try {
    if (process.env.NODE_ENV === 'development') console.log('Reducer', action);
    return caseReducer[action.type](state, action.payload as string);
  } catch (error) {
    console.error(error);
    return state;
  }
};

export default reducer;
