import { createContext, useContext, useState } from "react";

const MyContext = createContext({});

export function AppWrapper({ children }) {
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);

  return (
    <MyContext.Provider value={{ token, setToken, id, setId }}>
      {children}
    </MyContext.Provider>
  );
}

export function useAppContext() {
  return useContext(MyContext);
}
