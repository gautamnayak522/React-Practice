import axios from 'axios';

//  const _baseURL = 'https://localhost:44341/api/';
const _baseURL = 'http://192.168.101.219:90/api/';

// const token = localStorage.getItem("token")

const http = axios.create({
  baseURL: _baseURL
});

// Add a request interceptor
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.Authorization = "Bearer " + localStorage.getItem("token")

  return config;
}, function (error) {
  // Do something with request error

  return Promise.reject(error);
});

// Add a response interceptor
http.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log(response);
  return response;
}, function (error) {

  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error);  

  // if(error.response.status == 401){
      
  // }

  return Promise.reject(error);
});

export default http