import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../Context/context';


export default function Courses() {
    return (
     <ProductConsumer>
         {value=>{
             const {setClass}=value;
             return(
                <div className="courses">
                <div className="container">
                   <Title title="My tutorials" color={setClass?'#fefefe':'grey'} /> 
                   <div className="courses-center">

                      {value.courses.map(course=>{
                          return(
                            <div className="single-course" key={course.id}>
                            <iframe   src={course.iframe} frameBorder="0"  allowFullScreen></iframe>
                          <p>{course.title}</p>
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






