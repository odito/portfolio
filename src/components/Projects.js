import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../Context/context';

export default function Projects() {
    return (
   <ProductConsumer>
       {value=>{
           return(
            <div className="projects">
            <div className="container">
              <Title title="projects" color="grey" />
              <div className="projects-center">
                {value.projects.map(item=>{
                    return(
                        <div className="single-project" key={item.id}>
                            
                        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><img src={item.img} alt=""/></a>
                           <p>{item.title}</p>
                            <div className="items">
                               
                            <button className="projectBtn">{item.btnTitle}</button>
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
