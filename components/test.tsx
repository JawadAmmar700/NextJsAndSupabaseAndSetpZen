import React from "react"
import wrapFetchData from "../libs/wrap_promise"

const resources = wrapFetchData("https://jsonplaceholder.typicode.com/posts/1")

const Test = () => {
  const title = resources.read().title
  return <div>{title}</div>
}

export default Test
