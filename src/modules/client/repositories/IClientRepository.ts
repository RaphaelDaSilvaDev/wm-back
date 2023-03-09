import { Client } from "@prisma/client";
import { ICreateClient } from "../interfaces/ICreateClient";
import { IUpdateClient } from "../interfaces/IUpdateClient";

export interface IClientRepository {
  create(data: ICreateClient): Promise<Client>;
  findByDocument(document: string): Promise<Client | null>;
  findById(id: string): Promise<Client | null>;
  update(data: IUpdateClient, id: string): Promise<Client>;
  listAll(): Promise<Client[]>;
}
