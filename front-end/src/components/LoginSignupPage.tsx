import { useContext, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
import RouterContext from '../../Context/RouterContext';

function LoginAndSignupPage() {
    const auth = useContext(AuthContext);
    const route = useContext(RouterContext);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const homePageCallback = (error: string | null) => {
        //console.log('entered useEffect');
        if (!error) {
            console.log(error);
            route?.setRoute('/');
        }

        // if (!auth?.error && auth?.user) {
        //     route?.setRoute('/');
        // }
        //console.log(auth?.user);
    };

    return (
        <div className="flex justify-center items-center h-full ">
            <form className="flex flex-col my-auto justify-center items-center gap-[12px] mt-[225px] w-[100%]">
                <input
                    // className="bg-gradient-to-br from-[#2E335A] to-[#1C1B33] rounded"
                    className="mt-1 block w-full px-3 py-2 bg-[#e9f0fe] border border-slate-300 rounded-md text-sm outline-none
      invalid:outline-red-500 invalid:ring-red-500 invalid:outline-offset-[-1px] invalid:outline-[2px] box-border"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    value={email}
                    type="email"
                    pattern={`^[\\w\\d\\-\\.]+@[\\w\\d\\-]+\\.\\w{2,}$`}
                    placeholder="Enter your email..."
                />

                <input
                    // className="appearance-none rounded bg-gradient-to-br from-[#2E335A] to-[#1C1B33]"
                    className="mt-1 block w-full px-3 py-2 bg-[#e9f0fe] border border-slate-300 rounded-md text-sm
      focus:outline-none
      focus:invalid:border-red-500 focus:invalid:ring-red-500 focus:invalid:outline-[5px]"
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                    value={password}
                    type="password"
                    placeholder="Enter your password..."
                />
                <button
                    className="border border-white rounded w-full text-white hover:bg-sky-700 hover:scale-125 duration-300 transition-all disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none"
                    onClick={(event) => {
                        event.preventDefault();
                        auth?.loginHandler(email, password, homePageCallback);
                    }}
                    disabled={email === '' || password === ''}
                >
                    Log in
                </button>
                <button
                    className="border border-white rounded w-full text-white hover:bg-sky-700 hover:scale-125 duration-300 transition-all disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none"
                    onClick={(event) => {
                        event.preventDefault();
                        auth?.signupHandler(email, password, homePageCallback);
                    }}
                    disabled={email === '' || password === ''}
                >
                    Sign up
                </button>
                {auth?.error && (
                    <div className="text-sm text-rose-500">
                        {(auth.error as any).errors[0].msg}
                    </div>
                )}
            </form>
        </div>
    );
}

export default LoginAndSignupPage;
