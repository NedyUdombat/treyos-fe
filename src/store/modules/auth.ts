/** API Request(s) */

/** Types */

const DEFAULT_STATE = {
  user: {},
  isLoading: false,
  error: {},
};

export const authReducer = (
  state = DEFAULT_STATE,
  action?: { payload: unknown; type: string },
) => {
  switch (action?.type) {
    default:
      return state;
  }
};
