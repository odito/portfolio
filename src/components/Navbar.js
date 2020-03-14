import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import {scroller} from 'react-scroll';
import {ProductConsumer} from '../Context/context';




export default function Navbar() {
    
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
                {(value)=>{
                     
                    const {sidebarOpen, handleSidebar,handleClose,links,headerShow}=value;
                     
                  return(
                    <NavWrapper  show={sidebarOpen}  posit={headerShow}>
              

                    <div className="header-container">
                    <nav>
                    <div className="logoBtn">
                        <Link to='/'  onClick={handleClose}  ><img src={logo}  onClick={()=>scrollToElement('Home')
                } alt="logo"/></Link>
                        <div className="btn" onClick={handleSidebar} >
                           <div  className="bar"></div>
                           <div className="bar"></div>
                           <div className="bar"></div>
                        </div>
                    </div>
                  
            <ul className="links " onClick={handleClose} >
                
                 {links.map(links=>{
                    return(
                    <li  onClick={()=>scrollToElement(links.scrolling)
                } key={links.id}><Link to='/' >{links.link}</Link></li>
                    )
                })} 


                 {/* <li onClick={()=>scrollToElement('About')
                    } ><a href='#'   onClick={preventDef}>about</a></li> */}
            </ul>
                  
                  
                </nav>

                </div>
          
       
           </NavWrapper>
                  )
                }}
            </ProductConsumer>
         
       
         
      
    )
}


const NavWrapper = styled.div`
 
position:sticky !important;
top:0 !important;
z-index:6;

background:${props=>props.posit?'rgba(0,0,0,0.7)':'#666666'};
transition:${props=>props.posit?"all 0.5s ease-in-out":'all 0s ease-in-out'};
opacity:${props=>props.posit?"1":'0.9'};


.logoBtn img{
    display:block;
    padding:0px 0;
    width:100px;
    height:50px;
  
    padding:2px;
}

.header-container{
   
   
    width:100%;
    z-index:5;
  
}

.bar{
    width:35px;
    margin:5px ;
    padding:2px;
    background:#fff;
}

.btn{
    border:1px solid #f6f6f6;
    display:inline-block;
    cursor: pointer;
}

.logoBtn{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid grey;
    padding:10px;
}



.links{
    transition:all 0.5s ease-in-out;
    position:fixed;
    top:76px;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.9);
    width:400px;

   
    transform:${props=>props.show ?"translate(%)":"translate(-100%)"};
    
    
}

.links li a{
    color:#fff;
    text-transform:capitalize;
    padding:10px;
    display:block;
    transition:all 0.5s ease-in;
    border:1px solid transparent;
    border-bottom:1px solid transparent;
    font-size:18px;
}

.links li a:hover{
    color:#41e1b3;
    padding:10px 25px;
    border-bottom:1px solid #049fe1;
    background:rgba(0,0,0,1);
}

.headerTexts{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    min-height:inherit;
    text-align:center;
    padding:0 5px;
}


/* responsive version */



@media screen and (min-width:660px){
    .links{
    transition:all 0s ease-in-out !important ;  
    
}

.links li a{
   /* transition:none; */
}

}

@media screen and (min-width:664px){
   

 .header-container{
  
    margin:0 auto;
    
    width:100%;
   
    }

.btn{
    display:none;
}

 nav{
    display:flex;
    justify-content:space-between;
    padding:0px 0;
    max-width:1180px;
    margin:0 auto;
    position:relative;
}
   
 .links{
     transition:all 0s ease-in-out !important;
    display:flex;
    margin-right:10px;
    justify-content:space-between;
    align-items:center;
    position:relative;
    top:auto;
    background:transparent;
    width:auto;
    transform:${props=>props.show ?"translate(0)":"translate(0)"};
 }

 .links li a:hover{
    padding:10px;
    border:1px solid #049fe1;
    background:transparent;
    margin:0 2px;

}

.links li a{
    margin:0px 2px;
   
    font-size:18px;
    display:inline-block;
    height:auto;
}

.logoBtn{
   border-bottom:0 ;
}

}


@media screen and (min-width:960px){
.logoBtn img{
    display:block;
    padding:0px 0;
   
    
}


}

`;




