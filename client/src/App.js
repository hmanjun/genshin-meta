import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Test</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
