import React,{useState,useEffect} from 'react';
import axios from 'axios';
import style from './About.module.css'
export default function About(){
const [information, setInformation]=useState({});

useEffect(()=>{
    axios.get('https://portfolio-carlafaes.herokuapp.com/about')
    .then(
        res => setInformation(res.data[0])
    )
},[])
    return(
        <div id='about' className={style.container}>
            <div className={style.misdatos}>
                <img className={style.foto} src={information.photo} alt='yo_foto' />
                <div className={style.container_name}>
                    <h1 className={style.nombre}>Hola! soy {information.name}</h1>
                    <p className={style.profesion}>{information.profession}</p>
                </div>
            </div>
            <div className={style.aboutMe}>
                <p className={style.aboutme}>{information.about_me}</p> 
            </div>
            {/* <div className={style.tools}>
                <p className={style.skills}>{information.skills + ',  '}</p>
            </div> */}
            
        </div>
    )
}