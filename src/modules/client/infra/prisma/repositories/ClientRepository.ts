import { Client } from "@prisma/client";
import { prismaClient } from "../../../../../shared/infra/http/server";
import { ICreateClient } from "../../../interfaces/ICreateClient";
import { IUpdateClient } from "../../../interfaces/IUpdateClient";
import { IClientRepository } from "../../../repositories/IClientRepository";

export class ClientRepository implements IClientRepository {
  async create(data: ICreateClient): Promise<Client> {
    const client = await prismaClient.client.create({
      data: data
    });

    return client;
  }

  async update(data: IUpdateClient, id: string): Promise<Client> {
    const client = await prismaClient.client.update({
      where: { id },
      data: data
    });

    return client;
  }

  async findByDocument(document: string): Promise<Client | null> {
    const client = await prismaClient.client.findFirst({ where: { document } });
    return client;
  }

  async findById(id: string): Promise<Client | null> {
    const client = await prismaClient.client.findUnique({ where: { id } });
    return client;
  }

  async listAll(search?: string): Promise<Client[]> {
    const clients = await prismaClient.client.findMany(
      search
        ? {
            where: {
              OR: [
                {
                  name: { contains: search, mode: "insensitive" }
                },
                {
                  email: { contains: search, mode: "insensitive" }
                },
                {
                  addressCity: { contains: search, mode: "insensitive" }
                },
                {
                  addressState: { contains: search, mode: "insensitive" }
                },
                {
                  cellphoneNumber: { contains: search, mode: "insensitive" }
                },
                {
                  phoneNumber: { contains: search, mode: "insensitive" }
                }
              ]
            },
            orderBy: { createdAt: "desc" }
          }
        : undefined
    );
    return clients;
  }
}
