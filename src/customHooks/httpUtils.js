import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (
  opt = {
    url: '',
    method: 'get',
    body: null,
    initialData: [],
  },
  cb
) => {
  const [data, setData] = useState(opt.initialData);
  useEffect(() => {
    async function getData() {
      const { data } = await axios(opt.url, {
        method: opt.method,
        body: opt.body,
      });
      if (cb) cb(data);
      setData(data);
    }
    getData();
  }, [opt.url, opt.method, opt.body]);
  return [data, setData];
};
