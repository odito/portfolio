import React from 'react'
import Title from './Title';
import {ProductConsumer} from '../Context/context';
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';



export default function Contact() {
 
    const scrollToElement=(element)=>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-80
        });
      }



return (
<ProductConsumer>
    {value=>{
         const {setClass}=value;
        return(
            <React.Fragment>
            <Title title="contact" color={setClass?'#fefefe':'grey'} />
   <div className={setClass?"dark-mode-blue contact":"contact"}>
       <div className="container">
          
       <div className="contact-center">
            
         <div className="contact-links">
             <h3 className={setClass?'dark-mode-orange':''}>Links</h3>
             <div className="links-items">
             {value.links.map(links=>{
                 return(
                 <li key={links.id} onClick={()=>scrollToElement(links.scrolling)
                 }>
                     <Link to='/'>{links.link}</Link>
                     
                 </li>
                
                 )
             })}
             
                 {/* <li><a href="#">Home</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Skills</a></li>
                 <li><a href="#">Projects</a></li>
                 <li><a href="#">Courses</a></li>
                 <li><a href="#">Contact</a></li> */}
             </div>
         </div>
         <div className="contact-media">
             <h3 className={setClass?'dark-mode-orange':''}>Media</h3>
             <div className="media-items">
             <li><a href="https://www.youtube.com/channel/UCarYD6WjjdXRqBZhPF9ppHQ/videos?view_as=subscriber" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square"></i> Youtube</a></li>
             <li><a href="https://www.linkedin.com/in/odysseas-kolas-275582113/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> Linkedin</a></li>
             <li><a href="https://www.facebook.com/odyseas.kolas" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i> Facebook</a></li>
             <li><a href="https://www.twitter.com/odyssea11677554" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
             </div>

         </div>
     
       </div>
      </div>
    
   </div>
   <div className={setClass?"dark-mode-blue created":"created"}>
       <div className="container">
   <p>Designed and created by Codito {year()>2020?" 2020 - ":''}  {year()}</p>
       </div>
   </div>
   </React.Fragment>  
        )
    }}
</ProductConsumer>
)


}

// year function
let year=()=>{
    let year = new Date().getFullYear();
    return year
}
