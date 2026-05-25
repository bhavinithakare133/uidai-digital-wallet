import "./App.css";
import CredentialDashboard from "./components/CredentialDashboard";
import { CredentialProvider } from "./context/CredentialContext";

function App() {
  return (
    <CredentialProvider>
      <div className="app">
        <h1 className="title">
          UIDAI Credential Wallet
        </h1>

        <CredentialDashboard />
      </div>
    </CredentialProvider>
  );
}

export default App;