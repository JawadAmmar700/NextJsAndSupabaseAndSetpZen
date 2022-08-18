import { useQuery } from "@apollo/client"
import React from "react"
import { GET_POST_RELATIVE_TO } from "../libs/queries"
import styles from "../styles/Home.module.css"

export const getServerSideProps = (req: any) => {
  return {
    props: { id: req.params.relative_to },
  }
}

const Post = ({ id }: any) => {
  const { loading, error, data } = useQuery(GET_POST_RELATIVE_TO, {
    variables: {
      id: id,
    },
  })
  if (loading && !data) {
    return <div>...loading</div>
  }
  const { getPostUsingRelative_to } = data

  return (
    <div>
      {getPostUsingRelative_to.map((post: any) => (
        <a key={post.id} href="#">
          <h2>{post.id} &rarr;</h2>
          <p>{post.text}</p>
          <p>{post.username}</p>
          <p>{post.relative.name}</p>
        </a>
      ))}
    </div>
  )
}

export default Post
