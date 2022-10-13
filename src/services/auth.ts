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

interface EditBudget {
  description: string;
  provider: string;
  contact: string;
  expected_expense: number;
  actual_expense: number;
  amount_already_paid: number;
}

interface GuestAdd {
  name: string;
  contact: string;
  invite: boolean;
  isConfirmed: boolean;
  event_id: number;
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
  return baseApi.post("/guest", payload, getConfig());
}

export function getGuest(eventId: any) {
  return baseApi.get(`./guest/event/${eventId}`, getConfig());
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

export function getEvent(eventId: any) {
  return baseApi.get(`event/getevent/${eventId}`, getConfig());
}

export function delEvent(eventId: any) {
  return baseApi.delete(`/event/${eventId}`, getConfig());
}

export function getQuotationsByEventId(id: number | string) {
  return baseApi.get(`/quotation/event/${id}`, getConfig());
}

export function getQuotationById(id: number | string) {
  return baseApi.get(`/quotation/${id}`, getConfig());
}

export function cadastroBudget(payload: RegisterBudget) {
  return baseApi.post("/quotation", payload, getConfig());
}

export function editQuotationById(id: number | string, payload: EditBudget) {
  return baseApi.put(`/quotation/${id}`, payload, getConfig());
}
export function delQuotationByEventId(id: number | string) {
  return baseApi.delete(`/quotation/${id}`, getConfig());
}
