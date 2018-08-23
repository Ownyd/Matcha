import { ApolloServer, makeExecutableSchema, mergeSchemas } from 'apollo-server';
import { typeDefs, resolvers } from './src';

const newSchemaBuiltWithMakeExecutableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const mergedSchemas = mergeSchemas({
  schemas: [
    newSchemaBuiltWithMakeExecutableSchema,
  ],
});

const server = new ApolloServer({ schema: mergedSchemas });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
});
