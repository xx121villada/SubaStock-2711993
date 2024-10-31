import { createContext, useState, useContext, useEffect } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      if (!getToken()) {
        setIsLoading(false);
        return;
      }
      const validToken = await verifyToken();

      if (validToken) {
        setIsLogged(true);
      } else {
        removeToken();
      }

      setIsLoading(false);
    })();
  }, []);

  async function verifyToken() {
    // Aqui ira logica para verificar si el token es valido mediante la API

    return new Promise((resolve, reject) =>
      setTimeout(() => resolve(Math.random() * 100 > 50 ? false : true), 1500)
    );
  }

  function getToken() {
    localStorage.getItem("auth_token");
  }

  function removeToken() {
    if (localStorage.getItem("auth_token")) {
      localStorage.removeItem("auth_token");
    }
  }

  function addToken(token) {
    localStorage.setItem(token);
  }

  function login(token) {
    addToken(token);
    setIsLogged(true);
  }

  function logout() {
    removeToken();
    setIsLogged(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        isLoading,
        login,
        logout,
        getToken,
        addToken,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
