import User from "../models/User";

export default {
  Query: {
    users: () => User.findAll(),
    user: (_, { id }) => User.findByPk(id)
  },

  Mutation: {
    createUser: (_, { name, age }) => User.create({ name, age })
  }
};
