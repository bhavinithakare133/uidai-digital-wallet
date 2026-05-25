// context/CredentialContext.tsx

import React, { createContext, useEffect, useState } from "react";
import { fetchCredentials } from "../services/api";

export const CredentialContext = createContext<any>(null);

export const CredentialProvider = ({ children }: any) => {
  const [credentials, setCredentials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCredentials();
  }, []);

  const loadCredentials = async () => {
    try {
      setLoading(true);

      const data: any = await fetchCredentials();

      setCredentials(data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CredentialContext.Provider
      value={{
        credentials,
        loading,
        error,
      }}
    >
      {children}
    </CredentialContext.Provider>
  );
};