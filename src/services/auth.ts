import baseApi from "./api";

interface LoginPayload {
  email: string;
  password: string;
}

export function login(payload: LoginPayload) {
  return baseApi.post("/login", payload);
}
