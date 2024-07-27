import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function MyGithub() {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //     fetch("http://api.github.com/users/hiteshchoudhary")
    //     .then(res => res.json())
    //     .then(data => setdata(data))
        
    // })
    return (
        <div className='text-center text-white p-4 m-4 text-3xl bg-green-600'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="" width={300} />
        </div>
        
    )
}

export default MyGithub

export const mygithubInfoLoader = async() => {
    const response = await fetch("http://api.github.com/users/hiteshchoudhary")
    return response.json()
}
// so how this uselOader function work
// bsically this useLoader uses the data which is passing through Route Loader attribute
// when we are setting the routes responsible for fetching data before the component renders., then after receiving this data we can use in components 
