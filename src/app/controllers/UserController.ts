import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";
import bindedInstance from "../utils/bindedInstance";

export class UserController {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async registerUser(req: Request, res: Response) {
    try {
      const user = await this.repository.create(req.body);
      res.status(201).json({ data: user });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const user = await this.repository.update(req.params.id, req.body);
      res.status(200).json({ data: user });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await this.repository.delete(req.params.id);
      res.status(200).json({ data: user });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }

  async consultUser(req: Request, res: Response) {
    try {
      const user = await this.repository.get(req.params.id);
      res.status(200).json({ data: user });
    } catch (error) {
      res.status(500).json({
        message: error,
      });
    }
  }
}

export default bindedInstance(UserController);
