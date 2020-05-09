import React from 'react';
import Title from './Title';
import AboutLogo from '../images/aboutLogo.JPG';
import {ProductConsumer} from '../Context/context';

export default function About() {
    return (
    <ProductConsumer>
       {value=>{
          const {setClass}=value;
         return(
          <section className="about">
          <div className="container">
           <Title title="About" color={setClass?'#fefefe':'grey'}  />
           <div className="about-center">
               <div className="about-logo">
                  <img src={AboutLogo} alt="aboutlogo"/>
               </div>
               <div className={setClass ?"about-texts dark-mode-white":"about-texts"}>

               <div className={setClass ?"dark-mode-orange":"profile"}>
                   <h2>My profile</h2>
                 </div>
                   
                  <div className="name">
                  
                    <p><span className={setClass ?"dark-mode-orange":""}>Name:</span> Kolas Odysseas</p>

                 </div>
                  <div className="age">
                  <p><span className={setClass ?"dark-mode-orange":""}>Age:</span> 36</p>
                    </div> 
                 <div className="adress">
                   <p><span className={setClass ?"dark-mode-orange":""}>Address:</span> Ant,kiousi 47 Koropi (Athens), Greece</p> 
                 </div>
                 <div className="email">
                   <p><span className={setClass ?"dark-mode-orange":""}>Email:</span> <a href="mailto:odkolas@gmail.com" 
                   className={setClass?"dark-mode-mail":""}
                   >odkolas@gmail.com</a></p> 
                 </div> 
                 <div className="phone">
                   <p><span className={setClass ?"dark-mode-orange":""}>Phone:</span> +(30) 698 6823910</p> 
                 </div> 
                 <div className="website">
                   <p><span className={setClass ?"dark-mode-orange":""}>Website:</span> www.codito.com</p> 
                 </div>
                 <div className={setClass ?"about-media dark-mode-orangeBack":"about-media"}>
                 <a href="https://www.youtube.com/channel/UCarYD6WjjdXRqBZhPF9ppHQ/videos?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square"></i>
                 </a>

                <a href="https://www.linkedin.com/in/odysseas-kolas-275582113/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>
                </a>

                 <a href="https://www.facebook.com/odyseas.kolas" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i>
                 </a>

                 <a href="https://www.twitter.com/odyssea11677554" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i>
                 </a>
                     </div> 

             </div>
           
           </div>

           <div className={setClass ?"dark-mode-lightWhite generally":"generally"}>
               <span className={setClass?"dark-mode-orange":""}>Generally,</span><p>i graduated from Chalkis university as electrician engineer.I worked in my field as domestic and solar electrician form many years.The web development came to my life when i wanted to create a website for myself...and that was...it became my hobby and then a second job that i like so much.Below you will see my overall skills that i have in all fields in my life. </p>
               <div className="certificates">
                  <h4>My certificates:</h4>
                  <p>* Degree as <b>Electrician Engineer</b>  from Chalcis university.</p>
                  <p>* Many certificates <b> from the electrical field.</b></p>
                  <p>* Certificates in responsive websites,<b> html, css, javascript,   jquery, react.js, Bootstrap</b> from <b style={{color:'green'}}>FreeCodeCamp</b>, Udemy and TechTalentSchool.</p>
                  <p>* Certificates<b> ( Lower and IELTS ACADEMIC) </b> in English.</p>
                 
               </div>
              
             </div>
          </div>
        </section>
         )
       }}
    </ProductConsumer>
    )
}
