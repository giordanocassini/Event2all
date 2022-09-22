import baseApi from "./api";

interface LoginPayload {
  email: string;
  password: string;
}
interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

export function login(payload: LoginPayload) {
  return baseApi.post("/login", payload);
}

export function register(payload: RegisterUser) {
  return baseApi.post("", payload);
}
