import React from 'react'
import {useState} from 'react';
const Modal=({closeModal}) =>{
  const Data=[
    {
      title:"Font Color",
      name:'#444444',
      color:'#444444'
    },
    {
      title:"Background Color",
      name:'#FFFFFF',
      color:'#FFFFFF'
    },
    {
      title:"Button Color",
      name:'#2072EF',
      color:'#2072EF'
    },
    {
      title:"Button Border Color",
      name:'#2072EF',
      color:'#2072EF'
    },
    {
      title:"Button Mouseover Color",
      name:'#0053D1',
      color:'#0053D1'
    },
  ];
  return (
        <div className="modal">
        <div className="overlay" onClick={()=>closeModal(false)}></div>
        <div className="modal-content">
        <div className="upper">
        <h3>Theme Color</h3>
        <a href='/'>Change Theme</a>
        </div>
        {Data.map((props) =>{
          const{title , name ,color} = props;
          return (
        <div className="content">
        <div className="main">
        <p>{title}</p>
        <div className="inside-main">
        <p>{name}</p>
        <div className="color" style={{backgroundColor: color}}></div>
        </div>
        </div>
        </div>
        )
        
      })
  }   
        <div className="buttons">
        <button className='close-modal' onClick={()=>closeModal(false)}>Cancel</button>
        <button className='save'>Save</button>
        </div>
        </div>
        </div>

  );
}
export default Modal;