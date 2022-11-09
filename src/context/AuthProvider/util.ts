import { Api } from "../../shared/services/api";
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("user");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(username: string, password: string) {
  try {
    const request = await Api.post("/api/v1/Auth/LogIn", {
      username,
      password,
    });

    return request.data;
  } catch (error) {
    return null;
  }
}
