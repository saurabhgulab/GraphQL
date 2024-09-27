import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { users } from "./fakedb.js";

const typeDefs = gql`
  type Query {
    users: [User]
  }
  type User {
    id: ID
    name: String
    username: String
    email: String
    phone: String
    address: [Address]
  }
  type Address {
    street: String
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});
