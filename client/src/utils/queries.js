import {gql} from '@apollo/client'

const QUERY_NAMES = gql`
    query characterNames {
        allCharacters {
            name
        }
    }
`

const QUERY_CARD = gql`
    query characterCards {
        allCharacters {
            name
            imagePath
            rarity
        }
    }
`

const QUERY_COMMENTS = gql`
    query recentComments {
        allComments {
            name
            body
            target
        }
    }
`


export {QUERY_NAMES, QUERY_CARD, QUERY_COMMENTS}