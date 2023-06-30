import { createContext } from 'react';

export interface AuthContextProps {
    auth: boolean;
    loginAction: (email: string, password: string) => void;
    registerAction: (name: string, email: string, password: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);
