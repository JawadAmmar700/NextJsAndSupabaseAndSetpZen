import { useQuery } from "@apollo/client"
import React from "react"
import { GET_POSTS } from "../libs/queries"
import styles from "../styles/Home.module.css"

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS)
  console.log(data)
  return (
    <div className={styles.grid}>
      {data?.getPostList.map((post: any) => (
        <a key={post.id} href="#" className={styles.card}>
          <h2>{post.id} &rarr;</h2>
          <p>{post.text}</p>
          <p>{post.relative.name}</p>
        </a>
      ))}
    </div>
  )
}

export default Posts
