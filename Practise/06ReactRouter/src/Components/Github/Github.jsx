import React from 'react'
import {useLoaderData} from "react-router-dom"
function Github() {
  const data = useLoaderData()
  return (
    <>
      <div className='text-center text-white p-4 m-4 text-3xl bg-green-600'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="" width={300} />
      </div>
    </>
  )
}
export default Github
export const GithubInfoLoader = async() => {
  const response = await fetch("http://api.github.com/users/hiteshchoudhary")
  return response.json()
}
// so how this uselOader function work
// bsically this useLoader uses the data which is passing through Route Loader attribute
// when we are setting the routes responsible for fetching data before the component renders., then after receiving this data we can use in components 
