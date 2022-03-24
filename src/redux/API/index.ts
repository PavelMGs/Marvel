import axios from 'axios';
import md5 from 'js-md5';

const getData = async (endpoint: string, query = {}) => {
  try {
    const isServer = typeof window === 'undefined';
    if (isServer) {
      const ts = Number(new Date());
      const hash = md5.create();
      hash.update(ts + process.env.PRIVATE_KEY! + process.env.API_KEY);
      query = { ...query, hash: hash.hex(), ts };
    }
    const url = process.env.GET_HOST + endpoint;
    const apikey = process.env.API_KEY;
    const response = await axios.get(url, { params: { apikey, ...query } });
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};

const API = {
  get: getData,
};

export default API;
