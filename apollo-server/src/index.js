import { gql } from 'apollo-server';
import * as Users from './user';

const features = [
  Users,
];

const stringDoers = field =>
  features.reduce((acc, curr) => acc.concat(curr[field] || ''), '');

const resolversDoers = field =>
  features.reduce((acc, curr) => Object.assign({}, acc, curr.Resolvers[field]), {});

const typeDefs = gql`
  ${stringDoers('Type')}

  type Query {
    ${stringDoers('Query')}
  }

  type Mutation {
    ${stringDoers('Mutation')}
  }
`;

const Query = resolversDoers('Query');
const Mutation = resolversDoers('Mutation');

const resolvers = Object.assign({}, { Query, Mutation });

export {
  typeDefs,
  resolvers,
};
