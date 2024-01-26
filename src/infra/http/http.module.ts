import { Module } from "@nestjs/common";
import { GlobalControllers } from "./controllers";
import { DatabaseModule } from "../database/database.module";
import { CreateQuestionUseCase } from "@/domain/forum/application/use-cases/questions/create-question";
import { FetchRecentQuestionsUseCase } from "@/domain/forum/application/use-cases/questions/fetch-recent-questions";

@Module({
  imports: [DatabaseModule],
  providers: [CreateQuestionUseCase, FetchRecentQuestionsUseCase],
  controllers: [...GlobalControllers],
})
export class HttpModule {}
