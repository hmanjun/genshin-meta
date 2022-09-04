import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context'
import './App.css';

import Navbar from './components/navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

const authLink = setContext((_, {headers}) => {

  const token = localStorage.getItem('id_token')
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div id="screen-wrapper">
          <Navbar />
          <div id="page-container">
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/signup'
                element={<Signup />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
