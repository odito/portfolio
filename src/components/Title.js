import React from 'react';
import styled from 'styled-components';

export default function Title(props) {
    return (
        <TitleWrapper className="title" style={{
            color:props.color,
           
            
            }} >
           <h2 >{props.title}</h2>
          <div className="first">
            <div className="underline" ></div>
          </div>
        </TitleWrapper>
    )
}




const TitleWrapper = styled.div`
 text-align:center;
 margin-bottom:10px;


 h2{
    font-weight:400;
    text-transform:capitalize;
    letter-spacing:0.3rem;
}
.first{
  
}
 .underline{
     width:40px;
     margin:0 auto;
    border:1px solid;
 }

`
