import { useReducer } from 'react';
import { AuthContext, AuthReducer } from './';
import instance from '../api/LoginRegister';

export interface AuthState {
    auth: boolean;
}

const Auth_INITIAL_STATE: AuthState = {
    auth: false,
};

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE);

    const loginAction = async (name: string, email: string, password: string) => {

        try {

            const initRegister = await instance.post('/usuario', { name, email, password }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (initRegister.status === 200) {
                return dispatch({ type: '[Auth] - Register', payload: true });
            }
        } catch (error) {
            console.log(error);
            return dispatch({ type: '[Auth] - Register', payload: false });
        }
    };



    const registerAction = async (name: string, email: string, password: string) => {

        try {
            const sendRegister = await fetch('http://10.0.2.2:8080/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre: name, correo: email, password }),
            }).then((response) => response.json());

            console.log(sendRegister);

            if (sendRegister.status === 200) {
                return dispatch({ type: '[Auth] - Register', payload: true });
            }
        } catch (error) {
            console.log(error);
            return dispatch({ type: '[Auth] - Register', payload: false });
        }
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            loginAction,
            registerAction,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
