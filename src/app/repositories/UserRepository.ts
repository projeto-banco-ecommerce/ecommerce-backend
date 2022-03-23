import { User } from "../entities/user";
import { UserModel } from "../model/userModel";
import { ObjectId } from "mongoose";

class UserRepository {
  async create(user: User) {
    return UserModel.create(user);
  }

  async update(id: string, user: User) {
    return UserModel.findByIdAndUpdate(id, user, {
      returnOriginal: false,
    }).exec();
  }

  async get(id: ObjectId | string) {
    return UserModel.findById(id).exec();
  }

  async delete(id: string) {
    return UserModel.findByIdAndDelete(id).exec();
  }
}

export default UserRepository;
