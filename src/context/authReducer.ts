import { AuthState } from './AuthProvider';

type AuthActionType =
  | {type: '[Auth] - StartLoginRegister', payload: boolean}
  | {type: '[Auth] - errorAuth', payload: boolean}

export const AuthReducer = (state:AuthState, action:AuthActionType): AuthState => {
    switch (action.type) {
        case '[Auth] - StartLoginRegister':

           return {
                ...state,
                auth: action.payload,
            };

        case '[Auth] - errorAuth':

            return {
                 ...state,
                 errorAuth: action.payload,
             };

        default:
            return state;
    }
};
