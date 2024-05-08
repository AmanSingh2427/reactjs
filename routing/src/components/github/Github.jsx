import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    const data=useLoaderData();
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/AmanSingh2427`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data)
    //         })
    // },[])
    return (

        <div text-center bg-gray-600 text-white text-3xl p-4>Name: {data.name}
            <div className='text-center bg-gray-600 text-white text-3xl p-4'>Github ID:  {data.login}
            <p>Public_repos: {data.public_repos}</p>
                <img src={data.avatar_url} alt="" />
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader=async()=>{
    const res=await fetch('https://api.github.com/users/AmanSingh2427');
    return res.json();
}