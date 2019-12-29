import { GraphQLServer } from "graphql-yoga";
import "./database";

import path from "path";
import resolvers from "./graphql/resolvers";

const app = new GraphQLServer({
  typeDefs: path.join(__dirname, "graphql", "schema.graphql"),
  resolvers
});

app.start();
