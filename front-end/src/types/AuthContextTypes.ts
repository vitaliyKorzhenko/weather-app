export interface Auth {
    user: string | null;
    userIsLoading: boolean;
    error: string | null | undefined;
    loginHandler: (email: string, password: string) => Promise<void>;
    logoutHandler: () => Promise<void>;
    signupHandler: (email: string, password: string) => Promise<void>;
    deleteHandler: () => Promise<void>;
}
