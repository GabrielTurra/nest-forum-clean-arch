import { makeAnswer } from "@/test/factories/make-answer";
import { OnAnswerCreated } from "./on-answer-created";
import { InMemoryAnswersRepository } from "@/test/repositories/in-memory-answers-repository";
import { InMemoryAnswerAttachmentsRepository } from "@/test/repositories/in-memory-answers-attachments-repository";
import {
  SendNotificationUseCase,
  SendNotificationUseCaseRequest,
  SendNotificationUseCaseResponse,
} from "../use-cases/send-notification";
import { InMemoryQuestionsRepository } from "@/test/repositories/in-memory-questions-repository";
import { InMemoryQuestionAttachmentsRepository } from "@/test/repositories/in-memory-question-attachments-repository";
import { InMemoryNotificationsRepository } from "@/test/repositories/in-memory-notifications-repository";
import { makeQuestion } from "@/test/factories/make-question";
import { SpyInstance, vi } from "vitest";
import { waitFor } from "@/test/utils/wait-for";

let inMemoryQuestionsRepository: InMemoryQuestionsRepository;
let inMemoryAnswersRepository: InMemoryAnswersRepository;
let inMemoryAnswerAttachmentsRepository: InMemoryAnswerAttachmentsRepository;
let inMemoryQuestionAttachmentsRepository: InMemoryQuestionAttachmentsRepository;
let inMemoryNotificationsRepository: InMemoryNotificationsRepository;

let sendNotifcationUseCase: SendNotificationUseCase;

let sendNotificationExecuteSpy: SpyInstance<
  [SendNotificationUseCaseRequest],
  Promise<SendNotificationUseCaseResponse>
>;

describe("on answer created", () => {
  beforeEach(() => {
    inMemoryQuestionAttachmentsRepository = new InMemoryQuestionAttachmentsRepository();
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(
      inMemoryQuestionAttachmentsRepository,
    );

    inMemoryAnswerAttachmentsRepository = new InMemoryAnswerAttachmentsRepository();
    inMemoryAnswersRepository = new InMemoryAnswersRepository(inMemoryAnswerAttachmentsRepository);

    inMemoryNotificationsRepository = new InMemoryNotificationsRepository();

    sendNotifcationUseCase = new SendNotificationUseCase(inMemoryNotificationsRepository);

    sendNotificationExecuteSpy = vi.spyOn(sendNotifcationUseCase, "execute");

    new OnAnswerCreated(inMemoryQuestionsRepository, sendNotifcationUseCase);
  });

  it("should send a notification when a answer is created", async () => {
    const question = makeQuestion();
    const answer = makeAnswer({
      questionId: question.id,
    });

    inMemoryQuestionsRepository.create(question);
    inMemoryAnswersRepository.create(answer);

    await waitFor(() => {
      expect(sendNotificationExecuteSpy).toHaveBeenCalled();
    });
  });
});
