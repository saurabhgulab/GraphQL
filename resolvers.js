import { quotes, users } from "./fakedb2.js";
// import { randomBytes } from "crypto";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

const User = mongoose.model("User");
const resolvers = {
  Query: {
    users: () => users,
    user: (_, { _id }) => users.find((user) => user._id == _id),
    quotes: () => quotes,
    quoteByUser: (_, { by }) => quotes.filter((quote) => quote.by == by),
  },
  User: { quotes: (value) => quotes.filter((quote) => quote.by == value._id) },
  Mutation: {
    /*To signup New User */
    signUpUser: async (_, { userNew }) => {
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("email id already exists.");
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12);
      const newUser = new User({
        ...userNew,
        password: hashedPassword,
      });
      console.log(`new user ${userNew.firstName} created successfully`);
      return await newUser.save();
    },
    signinUser: async (_, { userSignin }) => {
      const user = await User.findOne({ email: userSignin.email });
      if (!user) {
        throw new Error("email does not exist");
      }
      const doMatch = await bcrypt.compare(userSignin.password, user.password);
      if (!doMatch) {
        throw new Error("email or password in invalid");
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      return { token };
    },
  },
};

export default resolvers;
