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

export const ADD_COMMENT = gql`
    mutation addComm($name: String!, $body: String!, $target: String!, $id: ID) {
        addComment(name: $name, body: $body, target: $target, id: $id) {
            _id
            name
            body
            target
        }
    }
`
export const REPORT_COMMENT = gql`
    mutation reportComm($reportCommentId: ID) {
        reportComment(id: $reportCommentId) {
        _id
        name
        body
        target
        reports
        }
    }
`

export const DELETE_COMMENT = gql`
    mutation delComment($deleteCommentId: ID) {
        deleteComment(id: $deleteCommentId) {
        _id
        name
        body
        target
        reports
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