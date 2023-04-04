import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import prismaClient from "../prismaClient";

async function CreateMaster() {
  const id = uuidV4();
  const encryptedPassword = await hash("wmmaster", 8);

  await prismaClient.user.upsert({
    where: { id },
    update: {},
    create: {
      id: id,
      name: "master",
      password: encryptedPassword,
      permission: "master",
      username: "master",
      avatar: null,
      createdAt: new Date(),
      status: "access",
      updatedAt: new Date()
    }
  });
}

CreateMaster()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (e) => {
    await prismaClient.$disconnect();
    process.exit(1);
  });
