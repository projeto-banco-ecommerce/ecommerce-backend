import { User } from "../entities/user";
import { model, Schema } from "mongoose";

const UserShema = new Schema<User>({
  name: String,
  email: String,
});

export const UserModel = model<User>("User", UserShema, "user");
export default UserModel;
