import React, { useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory, canisterId } from "../../../declarations/metalog_backend";
import IconLoader from "../utils/IconLoader";

const Auth = ({ onAuthenticated }) => {
  const [authClient, setAuthClient] = useState(null);

  useEffect(() => {
    const initAuth = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);

      if (await client.isAuthenticated()) {
        const identity = client.getIdentity();
        const principal = identity.getPrincipal().toText();
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
        onAuthenticated(principal);
      },
      onError: (err) => console.error("Login failed:", err),
    });
  };

  return (
    <div>
      <button onClick={login}>
        Get Started Today
        <IconLoader name="arrow-right" className="icon-arrow" />
      </button>
    </div>
  );
};

export default Auth;
