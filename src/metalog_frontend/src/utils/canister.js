import { canisterId as backendCanisterId } from "../../../declarations/metalog_backend";
import { canisterId as frontendCanisterId } from "../../../declarations/metalog_frontend";

export const getBackendCanisterId = () => backendCanisterId;
export const getFrontendCanisterId = () => frontendCanisterId;
