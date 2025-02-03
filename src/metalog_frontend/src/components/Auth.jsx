import React, { useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { registerUser, getUser } from "../utils/api"; // API untuk user
import { getBackendCanisterId } from "../utils/canister"; // Canister ID
import { FaUser } from "react-icons/fa";

const Auth = ({ onAuthenticated }) => {
  const [authClient, setAuthClient] = useState(null);
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const backendCanisterId = getBackendCanisterId(); // Canister ID

  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);

      if (await client.isAuthenticated()) {
        const identity = client.getIdentity();
        const principal = identity.getPrincipal().toText();

        let existingUser = localStorage.getItem("user");
        if (!existingUser) {
          existingUser = await getUser();
          if (!existingUser) {
            await registerUser("New User");
            existingUser = "New User";
          }
          localStorage.setItem("user", existingUser);
        }

        setUser(existingUser);
        onAuthenticated(principal);
      }
    };

    initAuth();
  }, [onAuthenticated]);

  const login = async () => {
    if (!authClient) return;

    await authClient.login({
      identityProvider: "https://identity.ic0.app",
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        const principal = identity.getPrincipal().toText();

        let existingUser = await getUser();
        if (!existingUser) {
          await registerUser("New User");
          existingUser = "New User";
        }
        localStorage.setItem("user", existingUser);

        setUser(existingUser);
        onAuthenticated(principal);
      },
      onError: (err) => console.error("Login failed:", err),
    });
  };

  return (
    <div className="auth-container">
      {user ? (
        <div className="user-info">
          <FaUser className="user-icon" />
          <p>Welcome, {user}</p>
          <p>Backend Canister ID: {backendCanisterId}</p>
        </div>
      ) : (
        <button onClick={login} className="auth-button">
          Get Started Today
        </button>
      )}
    </div>
  );
};

export default Auth;
