import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory, canisterId } from "../../../declarations/metalog_backend"; 

const agent = new HttpAgent({ host: "http://127.0.0.1:4943" }); 

export const metalogBackend = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

export const registerUser = async (name) => {
  try {
    const response = await metalogBackend.registerUser(name);
    return response;
  } catch (error) {
    console.error("Error registering user:", error);
    return null;
  }
};

// Fungsi untuk mendapatkan user
export const getUser = async () => {
  try {
    const response = await metalogBackend.getUser();
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
