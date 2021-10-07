import { combineReducers } from 'redux';

/** Reducers(s) */
import { authReducer } from './modules/auth';

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
