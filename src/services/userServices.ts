import baseApi from "./api";

function getConfig() {
  const token = window.localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return config;
}

export function pegaUsuarioPorId(id: string | number | null) {
  return baseApi.get(`user/${id}`, getConfig());
}

export function getEventListByUser(id: number) {
  return baseApi.get(`/event/${id}`, getConfig());
}

// export function editarUsuario(id: number, payload: EditarUsuario) {
//   return baseApi.put(`user/${id}`, payload, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// }
