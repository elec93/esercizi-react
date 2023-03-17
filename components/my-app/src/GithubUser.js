// Create a GithubUser component that fetches the data of the username passed as a prop, 
// and renders some of the data within a div tag. 
// The API to query is https://api.github.com/users/${username}.

import { useEffect, useState } from "react"

export default function GithubUser({username}) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        getGithubUser(username)
    }, [getGithubUser])

async function getGithubUser(username){
   const response = await fetch(`https://api.github.com/users/${username}`);
   const json =  await response.json()
   setUser(json)
}
  

  return (
    <div>{user && user.name}</div>
  )
}
