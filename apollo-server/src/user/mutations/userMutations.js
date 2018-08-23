import { gql } from 'apollo-server';
import addUser from '../services/addUser';

export const Mutation = gql`
  addUser: User
`;

export const Resolvers = {
  addUser: () =>
    addUser(),
};
