// This supports a stack of multiple modals. If you open a modal when another
// one is already open, the new one will appear, and when it is closed, the
// previous one will appear again.

import { createReducer } from '../utils/redux';

// Constants ----------------------------------------------

const MODAL_OPEN = 'modal/MODAL_OPEN';
const MODAL_FADE = 'modal/MODAL_FADE';
const MODAL_CLOSE = 'modal/MODAL_CLOSE';

// Actions ------------------------------------------------

let timeout;

export const modalOpen = (modal, props = {}, replace = false) => {
  clearTimeout(timeout);
  return {
    type: MODAL_OPEN,
    payload: { modal, props, replace }
  };
};

export const modalClose = () => dispatch => {
  dispatch({ type: MODAL_FADE });
  timeout = setTimeout(() => dispatch({ type: MODAL_CLOSE }), 400);
};

// Reducer ------------------------------------------------

const initialState = { stack: [] };

const modal = createReducer(initialState, {
  [MODAL_OPEN]: (state, { payload: { modal, props, replace } }) => {
    // this key is for use when rendering the modal stack
    const key = Math.random()
      .toString()
      .slice(2, 7);
    const newModal = { modal, ...props, visible: true, key };
    return replace
      ? { ...state, stack: [newModal].concat(state.stack.slice(1)) }
      : { ...state, stack: [newModal].concat(state.stack) };
  },
  [MODAL_FADE]: state => ({
    ...state,
    stack: [{ ...state.stack[0], visible: false }, ...state.stack.slice(1)]
  }),
  [MODAL_CLOSE]: state => ({
    ...state,
    stack: state.stack.slice(1)
  })
});

export default modal;
