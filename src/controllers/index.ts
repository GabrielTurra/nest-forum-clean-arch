import { AuthenticateController } from "./authenticate.controller";
import { CreateAccountController } from "./create-account.controller";
import { CreateQuestionController } from "./create-question.controller";

export const GlobalControllers = [
  CreateAccountController,
  CreateQuestionController,
  AuthenticateController,
];
