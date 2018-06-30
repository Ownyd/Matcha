import Users from './connectors';

const resolvers = {
    Query : {
        allUsers() {
            return Users.getAll();
        },
    },
    Mutation : {
        addUser(_, { mail, username, firstname, lastname, password }) {
            return Users.addOne({ mail, username, firstname, lastname, password });
        },
    },
}

export default resolvers;