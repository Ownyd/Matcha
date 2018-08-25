import { gql } from 'apollo-server';
import addUser from '../services/addUser';

export const Mutation = gql`
  addUser(name: String, gender: String): User
`;

export const Resolvers = {
  addUser: (_, user) =>
    addUser(user),
};
