import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import RouterContext from '../../Context/RouterContext';
import UnitContext from '../../Context/UnitContext';

function Header() {
    const auth = useContext(AuthContext);
    const router = useContext(RouterContext);
    const unit = useContext(UnitContext);
    return (
        <div className="flex w-[90%] justify-start mt-[5px]">
            {!auth?.user && (
                <button
                    onClick={() => router?.setRoute('/auth')}
                    className="border rounded-lg bg-[#e9f0fe] text-[#4d448e] disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none text-sm  w-[67px] mr-[5px]"
                >
                    Log in
                </button>
            )}
            {auth?.user && (
                <button
                    onClick={() => {
                        auth.logoutHandler(() => router?.setRoute('/auth'));
                    }}
                    className="border rounded-lg bg-[#e9f0fe] text-[#4d448e] disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none disabled:pointer-events-none text-sm  w-[67px] mr-[5px]"
                >
                    Log out
                </button>
            )}
            <div className=" content-center text-sm border rounded-lg bg-[#e9f0fe] text-[#4d448e]">
                {auth?.user && auth?.user}
            </div>
            <button
                className="flex justify-center items-center bg-[#e9f0fe] border rounded-lg shrink-0 w-[30px] h-[30px] ml-auto"
                onClick={unit?.toggleUnit}
            >
                <span className="text-[#4d448e] text-lg font-extrabold font-sans-display">
                    {unit?.unit === 'fahrenheit' ? '°F' : '°C'}
                </span>
            </button>
        </div>
    );
}

export default Header;
