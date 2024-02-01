import { useEffect, useState } from "react";
import { url } from "./index";
import { Local } from "./Token";

export const CustomeHook = (endpoint, setLoading) => {
  const [data, setData] = useState([]);
  const token = Local;
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const requestOptions = {
      headers: { Authorization: `Bearer ${token}` },
      signal: signal,
    };
    const getData = async () => {
      try {
        const response = await fetch(`${url}${endpoint}`, requestOptions);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          );
        }
        let actualData = await response.json();
        if (actualData.data) {
          setData(actualData.data);
        }
      } catch (err) {
        console.log(err.message);
        return [];
      } finally {
        setLoading(false);
      }
    };
    getData();
    // return () => controller.abort();
  }, []);
  return data;
};
