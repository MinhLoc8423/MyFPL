import AxiosInstance from '../utils/AxiosInstance';

export const getNews = async () => {
    try {
        const res = await AxiosInstance.get('/news');
        console.log(res.data);
        return res.data;
      } catch (err) {
        console.log('Err: ', err);
        return err;
      }
}

export const getJob = async (title) => {
  try {
      const res = await AxiosInstance.get(`/internship?q=${title}`);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log('Err: ', err);
      return err;
    }
}

export const getOneJob = async (id) => {
  try {
      const res = await AxiosInstance.get(`/internship/${id}`);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log('Err: ', err);
      return err;
    }
}

export const getSchedule = async () => {
  try {
      const res = await AxiosInstance.get('/schedule/cours');
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log('Err: ', err);
      return err;
    }
}

export const getExam = async () => {
  try {
      const res = await AxiosInstance.get('/exam/cours');
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log('Err: ', err);
      return err;
    }
}
