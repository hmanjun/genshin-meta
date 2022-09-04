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


export {QUERY_NAMES, QUERY_CARD}