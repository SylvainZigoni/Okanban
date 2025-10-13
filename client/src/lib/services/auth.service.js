import { httpRequest } from '../httpRequest';

export const registerUser = async (user) => {
    return await httpRequest('auth/register', 'POST', user);
};

export const loginUser = async (credentials) => {
    const { token } = await httpRequest('auth/login', 'POST', credentials);

    return { token };
};

export const getUser = async () => {
    return await httpRequest('auth/me', 'GET');
};
