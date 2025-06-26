import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export function listActivities() {
  return prisma.activity.findMany();
}

export function startActivity(description: string) {
  return prisma.activity.create({ data: { description } });
}

export function stopActivity(id: number) {
  return prisma.activity.update({
    where: { id },
    data: { endTime: new Date() },
  });
}
