import {gql} from '@apollo/client'

export const QUERY_NAMES = gql`
    query characterNames {
        allCharacters {
            name
        }
    }
`