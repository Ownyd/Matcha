import { gql } from 'apollo-server';

const userTypes = gql`
  type User {
    name: String
  }
`;

export default userTypes;
