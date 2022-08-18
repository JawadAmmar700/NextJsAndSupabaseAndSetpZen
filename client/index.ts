import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://delafield.stepzen.net/api/kind-sasquatch/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "APIKey delafield::stepzen.net+1000::fd019673283c8e47e7c83e580bc50360235a7a97db31947efdb4cb8505858fb5",
  },
})

export default client
