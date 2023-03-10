import { DeletePostByIDUseCase } from "./DeletePostByIDUseCase";
import { Request, Response } from "express";

export class DeletePostByIDController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const deletePostByIDUseCase = new DeletePostByIDUseCase();

    console.log(id);
    console.log(typeof id);
    const result = await deletePostByIDUseCase.execute({
      id,
      title: "",
      subject: "",
      subtitle: "",
      url_photo: "",
    });

    return res.status(201).send({
      Menssage: "Sucess",
    });
  }
}
