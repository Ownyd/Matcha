import * as queries from './queries/userQuery';
import * as mutations from './mutations/userMutations';
import userTypes from './userTypes';

export const Query = queries.Query;

export const Type = userTypes;

export const Mutation = mutations.Mutation;

export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
};
