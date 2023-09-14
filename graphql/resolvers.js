const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        throw new Error("Error fetching users");
      }
    },
    user: async (_, { id }) => {
      try {
        const user = await User.findByPk(id);
        return user;
      } catch (error) {
        throw new Error("Error fetching user");
      }
    },
  },
};

module.exports = resolvers;
