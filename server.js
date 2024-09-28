import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./schemaGQL.js";
import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDb");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDb", err);
});

import "./models/Quotes.js";
import "./models/User.js";

import resolvers from "./resolvers.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});

// mongodb+srv://saurabhgulab:<db_password>@cluster0.lffwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
