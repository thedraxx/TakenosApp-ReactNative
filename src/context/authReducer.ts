import { AuthState } from './AuthProvider';

type AuthActionType =
  | {type: '[Auth] - Register', payload: boolean}

export const AuthReducer = (state:AuthState, action:AuthActionType): AuthState => {
    switch (action.type) {
        case '[Auth] - Register':

           return {
                ...state,
                auth: action.payload,
            };

        default:
            return state;
    }
};
