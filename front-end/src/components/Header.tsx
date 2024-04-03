import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import RouterContext from '../../Context/RouterContext';

function Header() {
    const auth = useContext(AuthContext);
    const router = useContext(RouterContext);
    return (
        <div className="flex flex-row items-end justify-end gap-[12px] mr-[5px]">
            {!auth?.user && (
                <button
                    onClick={() => router?.setRoute('/auth')}
                    className="mr-0 mt-[5px] text-white disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none"
                >
                    Log in
                </button>
            )}
            {auth?.user && (
                <button
                    onClick={() => {
                        auth.logoutHandler(() => router?.setRoute('/auth'));
                    }}
                    className="mr-0 mt-[5px] text-[#e9f0fe] disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none text-sm"
                >
                    Log out
                </button>
            )}
            <div className="text-[#e9f0fe] text-sm">
                {auth?.user && <div>{auth?.user}</div>}
            </div>
        </div>
    );
}

export default Header;
