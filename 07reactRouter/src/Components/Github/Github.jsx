import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect( () => {
    //     fetch("http://api.github.com/users/hiteshchoudhary")
    //     .then(Response => Response.json())
    //     .then( data => {
    //         console.log(data);
    //         setdata(data);
    //     })
    // }, [])
    return (
        <div className='text-white m-4 p-4 text-3xl bg-gray-600 text-center'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Github Profile pic" width={300} /> </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch("http://api.github.com/users/hiteshchoudhary")
    return response.json()
}
// so how this uselOader function work
// bsically this useLoader uses the data which is passing through Route Loader attribute
// when we are setting the routes responsible for fetching data before the component renders., then after receiving this data we can use in components 
