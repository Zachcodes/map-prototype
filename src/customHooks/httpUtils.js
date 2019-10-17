import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (
  url,
  method = 'get',
  body = null,
  initialData = [],
  cb
) => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    async function getData() {
      const { data } = await axios(url, { method, body });
      if (cb) cb(data);
      setData(data);
    }
    getData();
  }, [url, method, body]);
  return [data, setData];
};
