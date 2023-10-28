import { ApolloServer } from "@apollo/server";
import { User } from "./User";


async function CreateApolloGrapgqlServer() {
    const gqlServer = new ApolloServer({
        typeDefs: `
          type Query {
            ${User.queries}
          }
          type Mutation {
            ${User.mutations}
          }
        `,
        resolvers: {
          Query: {
            ...User.resolvers.quries
          },
          Mutation: {
            ...User.resolvers.mutations
          }
      }});
      await gqlServer.start()
      return gqlServer;
}



  export default CreateApolloGrapgqlServer;