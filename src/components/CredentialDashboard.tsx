// components/CredentialDashboard.tsx

import React, { useContext } from "react";
import { CredentialContext } from "../context/CredentialContext";
import SecureDataMask from "./SecureDataMask";

const CredentialDashboard = () => {
  const { credentials, loading, error } =
    useContext(CredentialContext);

  if (loading) {
    return <p>Loading credentials...</p>;
  }

  if (error) {
    return <p role="alert">Error: {error}</p>;
  }

  if (!credentials.length) {
    return <p>No credentials found.</p>;
  }

  return (
    <div className="grid">
      {credentials.map((credential: any) => (
        <div key={credential.id} className="card">
          <h3>{credential.type}</h3>

          <p>{credential.holderName}</p>

          <SecureDataMask
            sensitiveData={credential.number}
          />
        </div>
      ))}
    </div>
  );
};

export default CredentialDashboard;