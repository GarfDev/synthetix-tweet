import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

const apoloClientGenerator = () => {
  let client: ApolloClient<NormalizedCacheObject> | null = null;
  return (): ApolloClient<NormalizedCacheObject> => {
    if (client) return client;
    client = new ApolloClient({
      uri: process.env.GRAPHQL_URL || "",
      cache: new InMemoryCache(),
    });
    return client;
  };
};

export default apoloClientGenerator();
