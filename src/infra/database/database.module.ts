import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaRepositories } from "./prisma/repositories";

@Module({
  providers: [PrismaService, ...PrismaRepositories],
  exports: [PrismaService, ...PrismaRepositories],
})
export class DatabaseModule {}
