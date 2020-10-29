import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

async function validateConnection() {
  return db.user.findMany()
}

export { db, validateConnection }
