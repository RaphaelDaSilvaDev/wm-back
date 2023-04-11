import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { AppError } from "../../errors/AppError";
import { router } from "./routes";
import cors from "cors";

import "../../containers";
import { PrismaClient } from "@prisma/client";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

let prismaClient: PrismaClient<
  {
    datasources: {
      db: {
        url: string | undefined;
      };
    };
  },
  never,
  false
>;

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const { clientCode } = req.body;
  const headersClientCode = req.headers.clientcode;
  const code = headersClientCode ? headersClientCode : clientCode;

  prismaClient = new PrismaClient({
    datasources: {
      db: {
        url: process.env[code]
      }
    }
  });
  next();
});

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  return response
    .status(500)
    .json({ status: "error", message: `Ocorreu um problema, tente novamente mais tarde!` });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});

export { prismaClient };
