import React from 'react';
import headerImg from '../images/logo.jpg' ;
import Bounce from 'react-reveal/Bounce';

export default function Header() {
    return (
        <section className="header">
         <img src={headerImg} alt="img"/>
         <div className="inside-container">
             <div className="texts">
                <Bounce right delay={500} duration={2000} cascade>
                 <h1>Hello, i am Odysseas.</h1>
                </Bounce>
                <Bounce left cascade delay={2000} duration={2000} >
                <h2>Electrician enginner,
                Web developer</h2>
               </Bounce>
                <Bounce bottom delay={4000} duration={3000} >
                <a href="mailto:odkolas@gmail.com" className="contactBtn">Contact</a>
                </Bounce>
             </div>
            
         </div>
        </section>
    )
}
