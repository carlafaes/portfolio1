import React,{useState,useEffect} from 'react';
import axios from 'axios';

export default function About(){
const [information, setInformation]=useState({});

useEffect(()=>{
    axios.get('/about')
    .then(
        res => setInformation(res.data[0])
    )
},[setInformation])
    return(
        <div>
            <h1>{information.name}</h1>
            <p>{information.profession}</p>
            <img src={information.photo} />
            {/* <p>{information.aboutme}</p> */}
            <p>{information.skills}</p>
        </div>
    )
}