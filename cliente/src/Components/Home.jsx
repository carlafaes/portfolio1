import React from 'react';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Navbar from './Navbar/Navbar'
import Contact from './Contact/Contact'

export default function Home(){

    return(
        <div>
             <Navbar/> 
            <div>
                <About/>
            </div>
            <div>

            <Portfolio/>
            </div>
            <div>

            <Contact/>
            </div>
        </div>
    )

}