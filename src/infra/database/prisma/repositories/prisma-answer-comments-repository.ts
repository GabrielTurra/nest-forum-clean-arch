import { PaginationParams } from "@/core/types/pagination-params";
import { AnswerCommentsRepository } from "@/domain/forum/application/repositories/answer-comments-repository";
import { AnswerComment } from "@/domain/forum/enterprise/entities/answer-comment";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaAnswerCommentsRepository implements AnswerCommentsRepository {
  create(answerComment: AnswerComment): Promise<void> {
    throw new Error("Method not implemented.");
  }

  delete(answerComment: AnswerComment): Promise<void> {
    throw new Error("Method not implemented.");
  }

  findById(answerCommentId: string): Promise<AnswerComment | null> {
    throw new Error("Method not implemented.");
  }

  findManyByAnswerId(questionId: string, params: PaginationParams): Promise<AnswerComment[]> {
    throw new Error("Method not implemented.");
  }
}
