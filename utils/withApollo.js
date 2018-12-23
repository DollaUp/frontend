import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
// import endpoints

const createClient = ({ ctx, headers, initialState }) =>
  new ApolloClient({
    uri: '',
    cache: new InMemoryCache().restore(initialState || {}),
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      });
    },
    clientState: {
      // TODO: do some stuff here
      // TODO: add defaults in the client state
    }
  });

export default withApollo(createClient);
