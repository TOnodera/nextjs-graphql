import { createYoga, createSchema } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";
import { resolvers } from "@/graphql/resolver";
import { readFileSync } from "fs";
import { join } from "path";
import { createContext } from "@/graphql/context";

const path = join(process.cwd(), "generated", "schema.graphql");
const typeDefs = readFileSync(path).toString("utf-8");

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context: createContext,
  fetchAPI: { Response },
  graphqlEndpoint: "/api/graphql",
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
