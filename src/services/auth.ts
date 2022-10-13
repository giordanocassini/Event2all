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

interface RegisterEvent {
  name: string;
  date: string;
  place: string;
  invite_number: number;
  managers: string[];
  event_budget: number;
}

interface RegisterBudget {
  event_id: string | number;
  description: string;
  provider: string;
  contact: string;
  expected_expense: number;
  actual_expense: number;
  amount_already_paid: number;
}

interface GuestAdd {
  name_guest: string;
  contact_guest: string;
}

function getConfig() {
  const token = window.localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return config;
}

export function cadastroGuest(payload: GuestAdd) {
  return baseApi.post("/");
}

export function login(payload: LoginPayload) {
  return baseApi.post("/login", payload);
}

export function register(payload: RegisterUser) {
  return baseApi.post("/user", payload);
}

export function cadastroEvent(payload: RegisterEvent) {
  return baseApi.post("/event", payload, getConfig());
}

export function getEvent(eventId: string) {
  return baseApi.get(`event/getevent/${eventId}`, getConfig());
}

export function cadastroBudget(payload: RegisterBudget) {
  return baseApi.post("/quotation", payload, getConfig());
}

export function getQuotationByEventId(id: number | string) {
  return baseApi.get(`/quotation/event/${id}`, getConfig());
}
