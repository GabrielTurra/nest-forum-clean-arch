// All Controllers defined here will be imported into the app.module.

import { AuthenticateController } from "./authenticate.controller";
import { CreateAccountController } from "./create-account.controller";
import { CreateQuestionController } from "./create-question.controller";
import { FetchRecentQuestionsController } from "./fetch-recent-questions.controller";

export const GlobalControllers = [
  CreateAccountController,
  CreateQuestionController,
  AuthenticateController,
  FetchRecentQuestionsController,
];
