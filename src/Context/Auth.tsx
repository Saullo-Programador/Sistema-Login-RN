import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../Services/AuthService';
import { Alert } from 'react-native';

export interface AuthData{
    token: string;
    email: string;
    name: string;
}

interface AuthContextData{
    authData?: AuthData;
    signIn: (email: string, password: string) => Promise<AuthData>;
    signOut: () => Promise<void>;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) =>{
    const [authData, setAuth] = useState<AuthData>();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        loadFromStorage()
    }, [])

    async function loadFromStorage(){
        const auth = await AsyncStorage.getItem('@AuthData')
        if(auth){
            setAuth( JSON.parse(auth) as AuthData)
        }
        setLoading(false)
    }

    async function signIn(email: string, password: string): Promise<AuthData> {
        try {
          //? Chamar a API 
          const auth = await authService.signIn(email, password);
          
          setAuth(auth);
          await AsyncStorage.setItem('@AuthData', JSON.stringify(auth));
      
          return auth;
        } catch (error) {
          Alert.alert(error.message, 'Tente Novamente');
          throw error; // Lançar o erro para que o chamador saiba que houve um problema no login
        }
      }
    
    async function signOut(): Promise<void>{
        //? Fazer Logout 
        setAuth(undefined)
        AsyncStorage.removeItem('@AuthData')

        return
    }

    return(
        <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}