import React, { createContext, useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userIdentity, setUserIdentity] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      if (await client.isAuthenticated()) {
        const identity = client.getIdentity();
        setUserIdentity(identity.getPrincipal().toText());
      }
    };

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ userIdentity, setUserIdentity }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;