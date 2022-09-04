import { gql } from "@apollo/client";

const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user {
                username
            }
        }
    }
`