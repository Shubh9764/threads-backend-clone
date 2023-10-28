import express from "express";
import CreateApolloGrapgqlServer from "./graphql";
import bodyParser from "body-parser";
import { prismaClient } from "./db";
import { User } from "@prisma/client";
import { expressMiddleware } from "@apollo/server/express4";

const app = express();

const PORT = Number(process.env.PORT) || 8000;

async function init() {
  

  app.use(bodyParser.json());
  app.use("/graphql", expressMiddleware(await CreateApolloGrapgqlServer()));
  
  app.get("/", (req, res) => {
    res.json({ message: "Server is up" });
  });

  app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);
  });
}

init();
