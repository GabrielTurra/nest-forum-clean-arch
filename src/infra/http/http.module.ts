import { Module } from "@nestjs/common";
import { GlobalControllers } from "./controllers";
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: GlobalControllers,
})
export class HttpModule {}
