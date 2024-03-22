import { useContext, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
import RouterContext from '../../Context/RouterContext';

function LoginAndSignupPage() {
    const auth = useContext(AuthContext);
    const route = useContext(RouterContext);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div>
            <div>
                <form>
                    <input
                        className={auth?.error ? ' is-invalid' : undefined}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        value={email}
                        type="text"
                        placeholder="Enter your email..."
                    />

                    <input
                        className={auth?.error ? 'is-invalid' : undefined}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        value={password}
                        type="password"
                        placeholder="Enter your password..."
                    />
                    <div>
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                auth?.loginHandler(email, password);
                                route?.setRoute('/');
                            }}
                        >
                            Log in
                        </button>

                        <div className="or d-flex align-self-center">or</div>
                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                auth?.signupHandler(email, password);
                            }}
                        >
                            Sign up
                        </button>
                    </div>
                    {auth?.error && (
                        <div className="globalError text-danger">
                            {auth.error}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default LoginAndSignupPage;
