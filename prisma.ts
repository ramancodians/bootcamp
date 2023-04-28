import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main<Void>() {
  // prisma.$use(async (params, next) => {
  //   // Soft Delete middleware
  //   // https://www.prisma.io/docs/concepts/components/prisma-client/middleware/soft-delete-middleware
  //   if (params.model === "Entry") {
  //     if (params.action === "delete") {
  //       params.action = "update"
  //       params.args["data"] = { deleted: true }
  //     }
  //   }
  //   return next(params)
  // })
}

main();

export default prisma;
