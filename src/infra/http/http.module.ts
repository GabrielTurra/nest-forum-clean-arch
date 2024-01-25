import { Module } from "@nestjs/common";
import { GlobalControllers } from "./controllers";
import { PrismaService } from "../prisma/prisma.service";

@Module({
  controllers: GlobalControllers,
  providers: [PrismaService],
})
export class HttpModule {}
