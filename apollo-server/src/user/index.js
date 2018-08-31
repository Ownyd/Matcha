import * as queries from './userQueries';
import * as mutations from './userMutations';
import userTypes from './userTypes';

export const Query = queries.Query;

export const Type = userTypes;

export const Mutation = mutations.Mutation;

export const Resolvers = {
  Query: queries.Resolvers,
  Mutation: mutations.Resolvers,
};
