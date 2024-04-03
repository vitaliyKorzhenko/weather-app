import axios from 'axios';

export const login = async (email: string, password: string) => {
    const { data: token } = await axios.post('account/login', {
        email,
        password,
    });

    return token;
};

export const signup = async (email: string, password: string) => {
    const { data: token } = await axios.post('account/create', {
        email,
        password,
    });

    return token;
};

export const logOut = async () => {
    await axios.delete(`account/logout`);
};

export const deleteAccount = async () => {
    await axios.delete('account/delete');
};
