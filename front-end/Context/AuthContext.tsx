import { createContext, useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Auth } from '../src/types/AuthContextTypes';
import { deleteAccount, logOut, login, signup } from '../src/utils/authApi';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext<Auth | undefined>(undefined);

export function AuthContextProvider(props: { children: React.JSX.Element }) {
    const [user, setUser] = useState<string | null>(null);
    const [userIsLoading, setUserIsLoading] = useState(false);
    const [error, setError] = useState<string | null>();

    const loadUser = useCallback(async () => {
        setUserIsLoading(true);
        try {
            //const user = await getUser();
            setUser(user);
        } catch (error) {
            console.log(error);
        } finally {
            setUserIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            loadUser();
        }
    }, []);

    const setSession = useCallback(async (token: string) => {
        try {
            axios.defaults.headers.authorizarion = `Bearer ${token}`;

            const decodedPayloadtoken = jwtDecode(token); //payload: //{email: yalo@ukr.net, iat:123455, exp: 134556}
            const currentUser = (decodedPayloadtoken as any).email;

            //console.log(currentUser);

            setUser(currentUser);
        } catch (error: unknown) {
            const errorText = (error as AxiosError)!.response!.data as string;

            setError(errorText);

            console.log('error', errorText);
        }
    }, []);

    const loginHandler = useCallback(
        async (email: string, password: string) => {
            try {
                const token = await login(email, password);

                await setSession(token);
            } catch (error) {
                const errorText = (error as AxiosError)!.response!
                    .data as string;

                setError(errorText);
            }
        },
        []
    );

    const signupHandler = useCallback(
        async (email: string, password: string) => {
            try {
                const token = await signup(email, password);

                await setSession(token);
            } catch (error) {
                const errorText = (error as AxiosError)!.response!
                    .data as string;

                setError(errorText);
            }
        },
        []
    );

    const logoutHandler = useCallback(async () => {
        await logOut();
        sessionStorage.removeItem('token');
        axios.defaults.headers.token = null;

        setUser(null);
    }, []);

    const deleteHandler = useCallback(async () => {
        await deleteAccount();

        sessionStorage.removeItem('token');
        axios.defaults.headers.token = null;

        setUser(null);
    }, []);
    if (userIsLoading) return <h1>user is loading</h1>;

    return (
        <AuthContext.Provider
            value={{
                user,
                userIsLoading,
                error,
                loginHandler,
                logoutHandler,
                signupHandler,
                deleteHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
