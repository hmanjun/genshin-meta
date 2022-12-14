import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context'
import './App.css';

import Navbar from './components/navbar'
import CommentBar from './components/comment-bar';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup';
import Character from './pages/Character';

const httpLink = createHttpLink({
  uri: '/graphql'
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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
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
              <Route
                path='/characters/:id'
                element={<Character />}
              />
            </Routes>
          </div>
          <CommentBar />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
