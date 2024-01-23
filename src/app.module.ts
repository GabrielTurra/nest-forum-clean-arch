import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";
import { envSchema } from "./env";
import { AuthModule } from "./auth/auth.module";
import { GlobalControllers } from "./controllers";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: GlobalControllers,
  providers: [PrismaService],
})
export class AppModule {}
