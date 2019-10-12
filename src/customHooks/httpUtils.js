import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (
  url,
  method = 'get',
  body = null,
  initialData = []
) => {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    async function getData() {
      const { data } = await axios(url, { method, body });
      setData(data);
    }
    getData();
  }, [url, method, body]);
  return [data, setData];
};
