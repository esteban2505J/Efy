import axios from "axios";

const instace = axios.create({
  baseURL: "http://localhost:9000/api",
  withCredentials: true,
});

export default instace;
