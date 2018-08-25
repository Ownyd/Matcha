import { gql } from 'apollo-server';

const userTypes = gql`
  type User {
    name: String
    gender: String
    biography: String
    interests: [String]
    images: [String]
  }
`;

export default userTypes;
