import { PaginationParams } from "@/core/types/pagination-params";
import { AnswersRepository } from "@/domain/forum/application/repositories/answers-repository";
import { Answer } from "@/domain/forum/enterprise/entities/answer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaAnswersRepository implements AnswersRepository {
  create(answer: Answer): Promise<void> {
    throw new Error("Method not implemented.");
  }

  save(question: Answer): Promise<void> {
    throw new Error("Method not implemented.");
  }

  delete(question: Answer): Promise<void> {
    throw new Error("Method not implemented.");
  }

  findById(questionId: string): Promise<Answer | null> {
    throw new Error("Method not implemented.");
  }

  findManyByQuestionId(questionId: string, params: PaginationParams): Promise<Answer[]> {
    throw new Error("Method not implemented.");
  }
}
