// lib/prisma.ts
// In here we create a global prisma client
// to avoid having to connect to PrismaClient every time we query/mutate the database
// Watch this segment to understand how exactly this code works
import { PrismaClient } from '@prisma/client';
declare global {
  var prisma: PrismaClient | undefined
}
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;