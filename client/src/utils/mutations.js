import { gql } from "@apollo/client";

export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user {
                username
            }
        }
    }
`

export const ADD_USER = gql `
    mutation newUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                username
            }
        }
    }
`
/*
const ADD_USER = gql `
    mutation addUser($username: String!, $email, String!, $password: String!){
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                username
            }
        }
    }
`
*/

//export {LOGIN_USER, ADD_USER}