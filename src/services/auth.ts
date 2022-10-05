import baseApi from "./api";

interface LoginPayload {
  email: string;
  password: string;
}
interface RegisterUser {
  name: string;
  email: string;
  birth_date: string;
  password: string;
}

interface RegisterEvent{
  event_name: string;
  event_date: string;
  place: string;
  invite_number: string;
  managers: string;
  event_budget: string;
}

export function login(payload: LoginPayload) {
  return baseApi.post("/login", payload);
}

export function register(payload: RegisterUser) {
  return baseApi.post("/user", payload);
}

export function cadastroEvent(payload: RegisterEvent){
  return baseApi.post("/event", payload);
}