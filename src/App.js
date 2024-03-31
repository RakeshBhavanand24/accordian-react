import React, { useState } from "react";
import './App.css';



function App() {

  const [accordian,setAccordian]= useState()

  const content = [
    {
      title:'Firstone 1',
      description:'brief Description 1'
    },
    {
      title:'Firstone 2',
      description:'brief Description 2'
    },{
      title:'Firstone 3',
      description:'brief Description 3'
    },{
      title:'Firstone 4',
      description:'brief Description 4'
    }
  ]

  const accodiantoggle=(index)=>{
    if(accordian===index){
      setAccordian(null)
    }
    else{
      setAccordian(index)
    }
  }

  return (
    <div className="container">
      <h2>FAQ ACCORDIAN</h2>
      {
        content.map((item,index)=>(
          <div className="sub-container" key={index}>
         <header onClick={()=>accodiantoggle(index)}>
          {item.title}  
          <span class="material-symbols-outlined">{accordian===index? 'expand_more' : 'expand_less'}</span></header>
        <p className={`description ${accordian===index? 'opentab' : ''}`}>{item.description}</p>
      </div>
        ))
      }
    </div>
  );
}

export default App;
