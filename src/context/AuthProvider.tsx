import { useReducer } from 'react';
import { AuthContext, AuthReducer } from './';
export interface AuthState {
    auth: boolean;
    errorAuth: boolean;
}

const Auth_INITIAL_STATE: AuthState = {
    auth: false,
    errorAuth: false,
};

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE);

    const loginAction = async (email: string, password: string) => {

        try {
            const sendRegister = await fetch('http://10.0.2.2:8080/usuario/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo: email, password }),
            });

            console.log(sendRegister);

            if (sendRegister.status === 200) {
                await sendRegister.json();
                return dispatch({ type: '[Auth] - StartLoginRegister', payload: true });
            }

            return dispatch({ type: '[Auth] - errorAuth', payload: true });

        } catch (error) {
            console.log(error);
            dispatch({ type: '[Auth] - StartLoginRegister', payload: false });
            return;
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
            });

            if (sendRegister.status === 200) {
                await sendRegister.json();
                return dispatch({ type: '[Auth] - StartLoginRegister', payload: true });
            }

            return dispatch({ type: '[Auth] - errorAuth', payload: true });

        } catch (error) {
            console.log(error);
            dispatch({ type: '[Auth] - StartLoginRegister', payload: false });
            return;
        }
    };

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <AuthContext.Provider value={{
            ...state,
            loginAction,
            registerAction,
        }}>
            {children}
        </AuthContext.Provider>
    );
};
