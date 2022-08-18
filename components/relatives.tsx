// import { useQuery } from "@apollo/client"
import React from "react"
import { GET_RELATIVES } from "../libs/queries"
import { useQuery } from "@apollo/react-hooks"
import styles from "../styles/Home.module.css"
import Link from "next/link"

const Relatives = () => {
  const { loading, error, data } = useQuery(GET_RELATIVES)

  if (loading) {
    return <div>...loading</div>
  }

  return (
    <div className={styles.grid}>
      {data?.getRelativeList.map((post: any) => (
        <Link href={`/${post.id}`} key={post.id}>
          <div className={styles.card}>
            <h2>{post.id} &rarr;</h2>
            <p>{post.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Relatives
