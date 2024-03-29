import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";
import "dotenv/config";

const prisma = new PrismaClient();

function generateUniqueDatabaseUrl(schemaId: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("Provide a Databse Url.");
  }

  const url = new URL(process.env.DATABASE_URL);

  url.searchParams.set("schema", schemaId);

  return url.toString();
}

const schemaId = randomUUID();

beforeAll(async () => {
  process.env.DATABASE_URL = generateUniqueDatabaseUrl(schemaId);
  execSync("npx prisma migrate deploy");
});

afterAll(async () => {
  await prisma.$executeRawUnsafe(`DROP SCHEMA IF EXISTS "${schemaId}" CASCADE`);
  await prisma.$disconnect();
});
