import storage from "local-storage-fallback";
import { api } from "./api";

export const TOKEN_KEY = "@DescomplicadorPassToken";

export const isAuthenticated = () => storage.getItem(TOKEN_KEY) !== null;

export const getToken = () => storage.getItem(TOKEN_KEY);

export const login = (token) => {
  api
    .post("/user/data", {
      id: token,
    })
    .then((res) => {
      let user = {
        id: token,
        name: res.data.name,
        username: res.data.username,
        email: res.data.email,
      };
      storage.setItem("@DescomplicadorStoredUser", JSON.stringify(user));
    });
  storage.setItem(TOKEN_KEY, token);
};

export const getUser = () =>
  JSON.parse(storage.getItem("@DescomplicadorStoredUser"));

export const logout = () => {
  storage.removeItem("@DescomplicadorStoredUser");
  storage.removeItem(TOKEN_KEY);
};
