import { createContext, useEffect, useState } from 'react';

const RouterContext = createContext<RouterContext | undefined>(undefined);

interface RouterContext {
    route: string;
    setRoute: (route: string) => void;
}

export function RouterContextProvider(props: {
    Routes: Record<string, React.JSX.Element>;
}) {
    const [route, setRoute] = useState(window.location.pathname);

    const changeRoute = (route: string) => {
        setRoute(route);
        window.history.pushState(null, '', route); //backward button gets active
    };

    useEffect(() => {
        const prevPageRoute = (window.onpopstate = () => {
            //being called when I press button
            setRoute(window.location.pathname);
        });

        return () => window.removeEventListener('popstate', prevPageRoute);
    }, []);

    return (
        <RouterContext.Provider value={{ route, setRoute: changeRoute }}>
            {props.Routes[route]}
        </RouterContext.Provider>
    );
}

export default RouterContext;
