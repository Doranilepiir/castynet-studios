import React, { useContext, useState, useEffect } from "react";

const Context = React.createContext();

export function useApi() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  useEffect(() => {
  }, []);

  const [animated, setAnimated] = useState(false);
  const [loaded, setLoaded] = useState();

  return <Context.Provider value={{ animated, loaded }}>{children}</Context.Provider>;
};
