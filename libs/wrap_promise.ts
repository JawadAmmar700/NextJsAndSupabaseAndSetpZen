const wrapPromise = (promise: Promise<any>) => {
  let status = "pending"
  let result: any
  let suspend = promise
    .then(data => {
      status = "resolved"
      result = data
    })
    .catch(error => {
      status = "rejected"
      result = error
    })
  return {
    read() {
      if (status === "pending") {
        throw promise
      }
      if (status === "rejected") {
        throw result
      }

      return result
    },
  }
}

const fetchData = (url: string) => {
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
}

const wrapFetchData = (url: string) => wrapPromise(fetchData(url))

export default wrapFetchData
