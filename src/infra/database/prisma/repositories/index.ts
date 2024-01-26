import { PrismaAnswerAttachmentsRepository } from "./prisma-answer-attachments-repository";
import { PrismaAnswerCommentsRepository } from "./prisma-answer-comments-repository";
import { PrismaAnswersRepository } from "./prisma-answers-repository";
import { PrismaQuestionAttachmentsRepository } from "./prisma-question-attachments-repository";
import { PrismaQuestionCommentsRepository } from "./prisma-question-comments-repository";
import { PrismaQuestionsRepository } from "./prisma-questions-repository";

export const PrismaRepositories = [
  PrismaAnswersRepository,
  PrismaAnswerCommentsRepository,
  PrismaAnswerAttachmentsRepository,
  PrismaQuestionAttachmentsRepository,
  PrismaQuestionCommentsRepository,
  PrismaQuestionsRepository,
];
