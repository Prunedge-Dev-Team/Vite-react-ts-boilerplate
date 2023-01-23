import Api from "@/api";
import { RegisterCredentialDTO } from "../enums";

export const signIn = async (payload: RegisterCredentialDTO) => {
  return Api.post("/auth/users/", payload).then((res) => res.data);
};
