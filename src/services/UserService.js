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

export const update = async (id, fullName, dateOfBirth, phoneNumber, address) => {
  try {
    const body = {
      fullName: fullName,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      address: address,
    };
    const res = await AxiosInstance.put(`/users/update?id=${id}`, body);
    return res.data;
  } catch (err) {
    console.log('Err: ', err);
    return err;
  }
};

export const updatePass = async (id, oldpassword, password) => {
  try {
    const body = {
      id: id,
      oldpassword: oldpassword,
      password: password,
    };
    const res = await AxiosInstance.put(`/users/changepassword`, body);
    return res;
  } catch (err) {
    console.log('Err: ', err);
    return err;
  }
};
