import { gql } from "@apollo/client"

export const GET_RELATIVES = gql`
  query MyQuery {
    getRelativeList {
      created_at
      id
      name
      post_id
    }
  }
`
export const GET_POSTS = gql`
  query MyQuery {
    getPostList {
      id
      created_at
      relative_to
      text
      username
      relative {
        created_at
        id
        name
      }
    }
  }
`

export const GET_POST_RELATIVE_TO = gql`
  query MyQuery2($id: ID!) {
    getPostUsingRelative_to(id: $id) {
      created_at
      id
      text
      username
      relative_to
      relative {
        created_at
        id
        name
        post_id
      }
    }
  }
`
