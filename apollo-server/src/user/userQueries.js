import { gql } from 'apollo-server';
import fetchAllUsers from './services/fetchAllUsers';

export const Query = gql`
  allUsers: [User]
`;

export const Resolvers = {
  allUsers: () =>
    fetchAllUsers(),
};
