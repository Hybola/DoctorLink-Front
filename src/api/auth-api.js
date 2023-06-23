import thisAxios from './thisAxios';

export const doctorRegister = (input) => thisAxios.post('/auth/doctor/register', input);
export const doctorLogin = (input) => thisAxios.post('/auth/doctor/login', input);
export const doctorFetchMe = () => thisAxios.get('/auth/doctor/me');

export const providerRegister = (input) => thisAxios.post('/auth/provider/register', input);
export const providerLogin = (input) => thisAxios.post('/auth/provider/login', input);
export const providerFetchMe = () => thisAxios.get('/auth/provider/me');


export const loginGoogle = (input) => thisAxios.post('/auth/logingoogle/:role', input)