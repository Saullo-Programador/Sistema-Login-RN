import { AuthData } from "../Context/Auth";

async function signIn (email: string, password: string): Promise<AuthData>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === '123456789') {
                resolve({
                    token: 'fake-token',
                    email,
                    name: 'Saullo Paulo',
                });
            } else{
                reject(new Error('credenciais inválidas'))
            }
        }, 500)
    })
}
export const authService = {signIn}