import axios from "./axios.js";

export const registerRequest = (user) => axios.post("/register", user);

export const loginRequest = (user) => axios.post("/login", user);

export const verifyTokenRequest = () => axios.get("/verify");
export const getShoppingList = (user) => axios.get("/orders", user);
export const payRequest = ({ id, amount }) =>
  axios.post("/pay", { id, amount });
