import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { pegaUsuarioPorId } from "../../../services/userServices";

interface UserState {
  token: string;
  id: number;
  name: string;
  email: string;
  isLogged: boolean;
  isLoading: boolean;
  isFail: boolean;
}

const userReduce = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
  } as UserState,
  reducers: {
    getRequestUser(state) {
      Object.assign(state, {
        token: undefined,
        id: undefined,
        name: undefined,
        email: undefined,
        isLogged: false,
        isLoading: true,
        isFail: false,
      });
    },
    setUser(state, action) {
      Object.assign(state, {
        token: action.payload.token,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        isLogged: true,
        isLoading: false,
        isFail: false,
      });
    },
    removeUser(state) {
      Object.assign(state, {
        token: undefined,
        id: undefined,
        name: undefined,
        email: undefined,
        isLogged: false,
        isLoading: false,
        isFail: false,
      });
    },
    failureResqueUser(state) {
      Object.assign(state, {
        token: undefined,
        id: undefined,
        name: undefined,
        email: undefined,
        isLogged: false,
        isLoading: false,
        isFail: true,
      });
    },
  },
});

export const { getRequestUser, setUser, removeUser, failureResqueUser } =
  userReduce.actions;
export default userReduce.reducer;

export const getUser = () => async (dispatch: Dispatch) => {
  dispatch(getRequestUser());
  const token = window.localStorage.getItem("token");
  const userId = JSON.parse(window.localStorage.getItem("user")!).id;
  try {
    const response = await pegaUsuarioPorId(userId);
    console.log(response);

    dispatch(
      setUser({
        token,
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
      })
    );
  } catch (error) {
    dispatch(failureResqueUser());
  }
};
