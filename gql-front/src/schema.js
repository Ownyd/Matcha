/* Inscription : 
    Mail
    Username
    Nom
    Prenom
    Mdp
*/

const typeDefs = `

type User {
    _id: String
    mail: String
    username: String
    firstname: String
    lastname: String
    password: String
}

type Query {
    allUsers: [User]
}

type Mutation {
    addUser (mail: String!, username: String!, firstname: String!, lastName: String!, password: String!) : User
}

`;

export default typeDefs;