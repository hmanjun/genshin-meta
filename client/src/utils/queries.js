import {gql} from '@apollo/client'

const QUERY_NAMES = gql`
    query characterNames {
        allCharacters {
            name
            _id
        }
    }
`

const QUERY_CARD = gql`
    query characterCards {
        allCharacters {
            name
            imagePath
            rarity
            _id
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

const QUERY_CHARACTER = gql`
  query allInfo($id: String) {
    getCharacter(_id: $id) {
      name
      updatedAt
      imagePath
      description
      vision
      weaponType
      nation
      rarity
      skillTalents {
        name
        type
        description
        upgrades {
          name
          value
        }
      }
      passiveTalents {
        name
        unlock
        description
      }
      constellations {
        name
        description
        unlock
      }
      comments {
        _id
        name
        body
        target
      }
      premiumWeapon {
        name
        type
        description
        imagePath
      }
      budgetWeapon {
        name
        type
        description
        imagePath
      }
      artifactSets {
        names
        imagePaths
        mainStats
        benefits {
          piece
          description
        }
      }
    }
  }
`


export {QUERY_NAMES, QUERY_CARD, QUERY_COMMENTS, QUERY_CHARACTER}