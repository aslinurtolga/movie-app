import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false)
  console.log(currentUser);

  useEffect(() => {
    userObserver();
  }, []);

  //desc ettik
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
