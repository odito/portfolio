import React, {Component} from 'react';
import {Links} from './Data';
import {devSkills} from './Data';
import {electricSkills} from './Data';
import {projects} from './Data';
import {courses} from './Data';

const ProductContext = React.createContext();

 class ProductProvider extends Component{

   state={

       sidebarOpen:false,
       closeLinks:false,
       links:Links,
       headerShow:false,
       devSkills:devSkills,
       electricSkills:electricSkills,
       projects:projects,
       courses:courses,
       backMode:false,
       setClass: JSON.parse(localStorage.getItem("Mode")),

   }


// open navbar method
handleSidebar=()=>{
  
 this.setState({
    sidebarOpen: !this.state.sidebarOpen,
  
 })
 console.log("clik");
 
}

// close links when pushing sidebar
handleClose = ()=>{
    if(this.state.sidebarOpen===true){
        this.setState({
           sidebarOpen:false
        })
    }
  
}

// light-dark mode
handleMode=()=>{
this.setState({
  backMode:!this.state.backMode  
})
}



componentDidMount(){
    window.addEventListener("scroll",this.scrollEffect);
  

}

// scroll effect
scrollEffect = ()=>{

  if(window.scrollY > 50 ){
    this.setState({
        headerShow:true
    })
  }

  else {
      this.setState({
          headerShow:false
      })
  }
   
   
}


darkMode= () => {

    if (JSON.parse(localStorage.getItem("Mode")) === true)
      this.setState({ setClass: false }, () => {
        localStorage.setItem("Mode", JSON.stringify(false));
      });
    else {
      this.setState({ setClass: true }, () => {
        localStorage.setItem("Mode", JSON.stringify(true));
      });
    }
  };




    render(){
        return(
        <ProductContext.Provider value={{
            ...this.state,
            handleSidebar:this.handleSidebar,
            handleClose:this.handleClose,
            scrollEffect:this.scrollEffect,
            handleMode:this.handleMode,
            darkMode:this.darkMode,
        }}>
           {this.props.children}
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};