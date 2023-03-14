import axios from "axios"
import Cookies from "js-cookie"

export const instance = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
})

instance.interceptors.request.use((config) => {
  if (Cookies.get("token")) {
    config.headers.Authorization = `Bearer ${Cookies.get("token")}`
  }
  else{
    config.headers.Authorization = `none`
  }

  console.log('start',config)
  return config
})
