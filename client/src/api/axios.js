import axios from "axios";

const port = process.env.PORT || 9000;
const instace = axios.create({
  baseURL: `http://localhost:${port}/api`,
  withCredentials: true,
});

export default instace;
