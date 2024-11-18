import axios from "axios";

const instace = axios.create({
  baseURL: "https://efy-1.onrender.com/api",
  withCredentials: true,
});

export default instace;
