import { quotes, users } from "./fakedb2.js";
import { randomBytes } from "crypto";

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id == id),
    quotes: () => quotes,
    quoteByUser: (_, { by }) => quotes.filter((quote) => quote.by == by),
  },
  User: { quotes: (value) => quotes.filter((quote) => quote.by == value.id) },
  Mutation: {
    signUpUser: (_, { userNew }) => {
      const id = randomBytes(5).toString("hex");
      users.push({
        id,
        ...userNew,
      });
      return users.find((user) => user.id == id);
    },
  },
};

export default resolvers;
