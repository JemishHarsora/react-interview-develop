/* eslint-disable eqeqeq */
import axios from "axios";
import config from "../config";

const axiosApi = axios.create({
  baseURL: config?.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPost = async (url, data, token = null) => {
  let response = {};

  try {
    const result = await axiosApi.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status == 200 && response?.data?.error) {
      response.status = false;
      response.data = result.data;
    } else {
      response.status = true;
      response.data = result.data;
    }
  } catch (e) {
    if (e.response) {
      if (e.response.status == 400) {
        response.status = false;
        response.message = e.response.data;
      } else if (e.response.status == 403) {
        response.status = false;
        response.message = e.response.data;
      } else if (e.response.status == 500) {
        response.status = false;
        response.message = "Internal server error";
      } else {
        response.status = false;
        response.message = "something went wrong";
      }
    }
  }
  return response;
};

// GET REQUEST
export const axiosGet = async (url, token, isStandalone = false) => {
  let response = {};

  try {
    const result = isStandalone
      ? await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      : await axiosApi.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

    if (response.status == 200 && response?.data?.error) {
      response.status = false;
      response.data = result.data;
    } else {
      response.status = true;
      response.data = result.data;
    }
  } catch (e) {
    if (e.response.status == 400 || e.response.status == 401) {
      response.status = false;
      response.error = e.response.data.error;
      response.message = e.response;
    } else if (e.response.status == 500) {
      response.status = false;
      response.message = "Internal server error";
    } else {
      response.status = false;
      response.message = "Something went wrong";
    }
  }
  return response;
};
