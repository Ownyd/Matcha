// import connectors from './connectors';

const resolvers = {
    Query : {
        allUsers() {
            return Users.getAll();
        },
    },
    Mutation : {
        addUser() {
            return Users.addOne();
        },
    },
}

export default resolvers;