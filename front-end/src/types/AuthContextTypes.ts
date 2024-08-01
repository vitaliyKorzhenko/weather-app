export interface Auth {
    user: string | null;
    userIsLoading: boolean;
    error: string | null | undefined;
    isVerified: boolean;
    loginHandler: (
        email: string,
        password: string,
        callback: (error: string | null) => void
    ) => Promise<void>;
    logoutHandler: (callback: () => void) => Promise<void>;
    signupHandler: (
        email: string,
        password: string,
        callback: (error: string | null) => void
    ) => Promise<void>;
    deleteHandler: () => Promise<void>;
}
