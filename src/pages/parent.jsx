import React from "react";
import { Children } from 'react';
import axios from "axios"
import { json } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import loader from "../assets/loader.json";
import Lottie from "lottie-react";

export default function ParentItem(props)
{
    const[loader1, setLoader1] = useState(true);
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        getCustomersData();
    }, [])
    const getCustomersData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((result) => setMyData(result.data));
            setLoader1(false);
    }
    
    return <><div className="flex justify-center">
    {loader1 === true &&(<Lottie 
                style={{ width: "100px", height: "100px"}}

	   animationData={loader} />)}</div>
    Hello, 1231;I am testing my first ever parent children
    <div>1231231</div>
    {props.children}
    <button onClick={getCustomersData}>test api</button>
    <div className="grid grid-cols-4 gap-4">
    {myData.map(
        (devs) => {
           return <>
           <div className="grid-cols-4	border-solid border-2 p-[20px]">
           <div><Link to={`/posts/${devs.id}`}>{devs.title}</Link></div> 
           <div>{devs.body}</div>
           </div>
           </>
        }

    )}
    </div>
    </>
}
