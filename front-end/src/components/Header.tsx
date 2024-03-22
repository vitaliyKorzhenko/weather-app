import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import RouterContext from '../../Context/RouterContext';

function Header() {
    const auth = useContext(AuthContext);
    const router = useContext(RouterContext);
    return (
        <div>
            {!auth?.user && (
                <button onClick={() => router?.setRoute('/auth')}>
                    Log in
                </button>
            )}
            {auth?.user && (
                <button onClick={() => router?.setRoute('/auth')}>
                    Log out
                </button>
            )}
            {auth?.user && <div>{auth?.user}</div>}
        </div>
    );
}

export default Header;
