import { url } from "../Environment/index";

import { Local } from "./Token";
import { ToastError } from "./Toast";
const token = Local;

export const GetData = async (endpoint, setLoading, signal) => {
  try {
    setLoading(true);
    const requestOptions = {
      headers: { Authorization: `Bearer ${token}` },
      signal: signal,
    };
    const response = await fetch(`${url}${endpoint}`, requestOptions);
    if (!response.ok) {
      let actualData = await response.json();
      ToastError(actualData.message);
    }
    let actualData = await response.json();
    if (actualData.data) {
      return actualData.data;
    } else {
      return actualData;
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setLoading(false);
  }
};
export const PostData = async (endpoint, setLoading, signal, data) => {
  try {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      signal: signal,
      body: JSON.stringify(data),
    };
    const response = await fetch(`${url}${endpoint}`, requestOptions);
    if (!response.ok) {
      let actualData = await response.json();
      ToastError(actualData.message);
    }
    let actualData = await response.json();
    if (actualData.data) {
      return actualData.data;
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setLoading(false);
  }
};
export const PutData = async (endpoint, setLoading, signal, data) => {
  try {
    setLoading(true);
    const requestOptions = {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      signal: signal,
      body: JSON.stringify(data),
    };
    const response = await fetch(`${url}${endpoint}`, requestOptions);
    if (!response.ok) {
      let actualData = await response.json();
      ToastError(actualData.message);
    }
    let actualData = await response.json();
    if (actualData.data) {
      return actualData.data;
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setLoading(false);
  }
};
export const PostDataUplaod = async (endpoint, setLoading, signal, data) => {
  try {
    setLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      signal: signal,
      body: data,
    };
    const response = await fetch(`${url}${endpoint}`, requestOptions);
    if (!response.ok) {
      let actualData = await response.json();
      ToastError(actualData.message);
    }
    let actualData = await response.json();
    if (actualData.data) {
      return actualData.data;
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setLoading(false);
  }
};

export const formDataPut = async (endpoint, setLoading, signal, data) => {
  try {
    setLoading(true);
    const requestOptions = {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}` },
      signal: signal,
      body: data,
    };
    const response = await fetch(`${urls}${endpoint}`, requestOptions);
    if (!response.ok) {
      let actualData = await response.json();
      ToastError(actualData.message);
    }
    let actualData = await response.json();
    if (actualData.data) {
      return actualData.data;
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setLoading(false);
  }
};
export const DeleteData = async (endpoint, setLoading, signal) => {
  try {
    setLoading(true);
    const requestOptions = {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
      signal: signal,
    };
    const response = await fetch(`${url}${endpoint}`, requestOptions);
    if (!response.ok) {
      let actualData = await response.json();
      ToastError(actualData.message);
    }
    let actualData = await response.json();
    if (actualData.data) {
      return actualData.data;
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setLoading(false);
  }
};
export const GetDataUser = async (endpoint, setLoading, signal, token) => {
  try {
    setLoading(true);
    const requestOptions = {
      headers: { Authorization: `Bearer ${token}` },
      signal: signal,
    };
    const response = await fetch(`${url}${endpoint}`, requestOptions);
    if (!response.ok) {
      let actualData = await response.json();
      ToastError(actualData.message);
    }
    let actualData = await response.json();
    if (actualData.data) {
      return actualData.data;
    } else {
      return actualData;
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    setLoading(false);
  }
};
