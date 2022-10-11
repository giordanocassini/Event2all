import baseApi from "./api";

const token = window.localStorage.getItem("token");

export function pegaUsuarioPorId(id: string | null, token: string | null) {
  return baseApi.get(`user/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

// export function editarUsuario(id: number, payload: EditarUsuario) {
//   return baseApi.put(`user/${id}`, payload, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// }
