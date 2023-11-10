import { createContext, useState, useContext, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
} from "../api/auth.js";
import Cookies from "js-cookie";
import { Button } from "@nextui-org/react";

export const AuthContext = createContext();

export const userAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used withim an AutProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const sigUp = async (user) => {
    try {
      setLoading(true);
      const res = await registerRequest(user);
      setLoading(false);
      if (!res) setLoading(false);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      setErrors(error.response.data);
    }
  };

  // const sendEmailBuy = async () => {
  //   try {
  //     if (user && user.fullName && user.email) {
  //     // Llama a sendEmailBuy con user
  //       const info = await sendEmailBuy(user1);
  //       console.log("Mensaje enviado");
  //   } else {
  //     console.error("El objeto user no tiene la estructura esperada.");
  //   }
  //   } catch (error) {
  //     // return setErrors(error.response.data);
  //   }
  // };

  const sigIn = async (user) => {
    try {
      setLoading(true);
      const res = await loginRequest(user);
      console.log(res);
      setLoading(false);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response)) {
        setLoading(false);
        return setErrors(error.response);
      }
      setErrors([error.response]);
    }
  };

  const logOut = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser("");
  };

  useEffect(() => {
    if (errors.length >= 1) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        console.log(loading);
        return;
      }
      {
        try {
          const res = await verifyTokenRequest(cookies.token);
          if (!res.data) {
            setIsAuthenticated(false);
            setLoading(false);
            console.log("no hay nada");
            return;
          }

          console.log(res.data);

          setIsAuthenticated(true);
          setUser(res.data);
          setLoading(false);
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
          console.log(error);
        }
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        sigUp,
        sigIn,
        logOut,
        isAuthenticated,
        errors,
        loading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default userAuth;
