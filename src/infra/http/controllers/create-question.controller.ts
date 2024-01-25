import { Body, Controller, Post, UseGuards, UsePipes } from "@nestjs/common";
import { JwtAuthGuard } from "@/infra/auth/jwt-auth.guard";
import { CurrentUser } from "@/infra/auth/current-user-decorator";
import { UserPayload } from "@/infra/auth/jwt.strategy";
import { z } from "zod";
import { ZodValidationPipe } from "@/infra/http/pipes/zod-validation.pipe";
import { PrismaService } from "@/infra/prisma/prisma.service";

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
});

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>;

@Controller("/questions")
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createQuestionBodySchema))
  async handle(@Body() body: CreateQuestionBodySchema, @CurrentUser() user: UserPayload) {
    const { title, content } = body;
    const slug = this.convertToSlug(title);
    const userId = user.sub;

    await this.prisma.question.create({
      data: {
        authorId: userId,
        title,
        content,
        slug,
      },
    });
  }

  private convertToSlug(title: string): string {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  }
}
