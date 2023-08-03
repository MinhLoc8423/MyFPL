import AxiosInstance from '../utils/AxiosInstance';

export const login = async (username, password) => {
  try {
    const body = {
      email: username,
      password: password,
    };
    const res = await AxiosInstance.post('/users/login', body);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log('Err: ', err);
    return err;
  }
};
