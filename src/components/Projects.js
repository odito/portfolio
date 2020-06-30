import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../Context/context';

export default function Projects() {
    return (
   <ProductConsumer>
       {value=>{
           const {setClass, projectsBtns, filterProjects, projectsBtnNames}=value;
           return(
            <div className="projects">
            <div className="container">
              <Title title="projects" color={setClass?'#fefefe':'grey'}  />

              {/* buttons choiches */}
                <div className="btns-filter">
                   <div className="single-btn"> <button value="All" onClick={projectsBtns} >All</button></div>
                   <div className="single-btn"> <button value="React" onClick={projectsBtns} >React</button></div>
                   <div className="single-btn"> <button value="Html-Css" onClick={projectsBtns} >Html-Css</button></div>
                
                {/*... dynamic way.... */}
                   {/* {projectsBtnNames.map(item=>{
                       return(
                       <div className="single-btn"> <button value={item} onClick={projectsBtns} >{item}</button></div> 
                       )
                   })} */}


                </div>

              {/* end of buttons choiche */}
              <div className="projects-center">
                {value.filterProjects.map(item=>{
                    return(
                        <div className={setClass ?"newBorder single-project":"single-project"} key={item.id}>
                            
                        <a href={item.extlink} target="_blank" rel="noopener noreferrer"><img src={item.img} alt=""/></a>
                           <p>{item.title}</p>
                            <div className="items">
                               
                            <button className="projectBtn"><a href={item.extlink} target="_blank">{item.btnTitle}</a></button>
                            </div>
                    </div>
                    )
                })}
              </div>
            </div>
        </div>
           )
       }}
   </ProductConsumer>
    )
}
