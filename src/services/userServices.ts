import baseApi from "./api";

const token = window.localStorage.getItem("token");
const config = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

export function pegaUsuarioPorId(id: string | number | null) {
  return baseApi.get(`user/${id}`, config);
}

export function getEventListByUser(id: number) {
  return baseApi.get(`/event/${id}`, config);
}

// export function editarUsuario(id: number, payload: EditarUsuario) {
//   return baseApi.put(`user/${id}`, payload, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// }
