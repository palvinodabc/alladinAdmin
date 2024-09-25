import axios from "axios";
import { api } from "../config";

// default
axios.defaults.baseURL = api.API_URL;
// content type
axios.defaults.headers.post["Content-Type"] = "application/json";

// content type
const token = JSON.parse(sessionStorage.getItem("authUser")) ? JSON.parse(sessionStorage.getItem("authUser")).token : null;
if (token) axios.defaults.headers.common["Authorization"] = "Bearer " + token;

// intercepting to capture errors
axios.interceptors.response.use(
  function (response) {
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.status) {
      case 500:
        message = "Internal Server Error";
        break;
      case 401:
        message = "Invalid credentials";
        break;
      case 404:
        message = "Sorry! the data you are looking for could not be found";
        break;
      default:
        message = error.message || error;
    }
    return Promise.reject(message);
  }
);
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = (token) => {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
};

class APIClient {
  /**
   * Fetches data from given url
   */

  //  get = (url, params) => {
  //   return axios.get(url, params);
  // };

  get = async (url, params) => {
    const tokenData = JSON.parse(localStorage.getItem("user"));
    const headers = {
      "x-auth-token": tokenData?.payload?.token,
      "ngrok-skip-browser-warning": true,
      "User-Agent": true,
    };

    let response;

    let paramKeys = [];

    if (params) {
      Object.keys(params).map((key) => {
        paramKeys.push(key + "=" + params[key]);
        return paramKeys;
      });

      const queryString = paramKeys && paramKeys.length ? paramKeys.join("&") : "";
      response = axios.get(`${url}?${queryString}`, { params });
    } else {
      response = await axios.get(`${url}`, { params, headers });
    }

    return response;
  };
  /**
   * post given data to url
   */
  create = (url, data) => {
    //     console.log("data-->", data);
    //     const tokenData = JSON.parse(localStorage.getItem("user"));
    //     const headers = {
    //       "x-auth-token": tokenData?.payload?.token,
    //       "ngrok-skip-browser-warning": true,
    //       "User-Agent": true,
    //     };
    // , { headers }
    return axios.post(url, data);
  };
  /**
   * Updates data
   */
  update = (url, data) => {
    console.log("first", data);
    return axios.patch(url, data);
  };

  put = (url, data) => {
    const tokenData = JSON.parse(localStorage.getItem("user"));
    const headers = {
      "x-auth-token": tokenData?.payload?.token,
      "ngrok-skip-browser-warning": true,
      "User-Agent": true,
    };
    return axios.put(url, data, { headers });
  };
  /**
   * Delete
   */
  delete = (url) => {
    const tokenData = JSON.parse(localStorage.getItem("user"));
    const headers = {
      "x-auth-token": tokenData?.payload?.token,
      "ngrok-skip-browser-warning": true,
      "User-Agent": true,
    };
    return axios.delete(url, { headers });
  };
}
const getLoggedinUser = () => {
  const user = sessionStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

export { APIClient, setAuthorization, getLoggedinUser };
