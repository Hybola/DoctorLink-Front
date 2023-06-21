import thisAxios from './axios';

export const register = (input) => thisAxios.post('/auth/register', input);
export const login = (input) => thisAxios.post('/auth/login', input);
export const fetchMe = () => thisAxios.get('/auth/me');
