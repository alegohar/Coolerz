import React from "react";
import { Children } from 'react';
import axios from "axios"
import { json, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Components/Header";
import loader from "../assets/loader.json";
import Lottie from "lottie-react";

export default function PostsItem(props)
{
const{id} = useParams();
const[loaderz, setLoaderz] = useState(true);
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        getCustomersData();
    }, [])
    const getCustomersData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((result) => setMyData(result.data));
            setLoaderz(false);
    }
    
    return <><Header/>
    This is my Detail Posts Generated<div>1231231</div><div className="flex justify-center">{loaderz === true &&(<Lottie 
                style={{ width: "100px", height: "100px"}}

	   animationData={loader} />)}</div>
    {props.children}
    <div className="grid">
    
           return <>
           <div>
           <div>{myData.title}</div> 
           <div>{myData.body}</div>
           <Link to={'/'}><button>Back to Posts</button></Link>
           </div>
           </>
    </div>
    </>
}
