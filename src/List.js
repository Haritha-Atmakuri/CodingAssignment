import React, { useRef, useState } from 'react';
import './List.css';

export default function List(props) {
  const list = props.myList.map((data, index) => <div key={index}>

    <div className="container">
      <div className="movieImage" style={{ backgroundImage: `url(${data.img})` }}>


        <button className={props.btnClass} onClick={() => props.removeList(data.id)}>{props.btnName}</button>
      </div>
      <div className="title">
      {data.title}
    </div>
    </div>
    
  </div>)
  return (
    <div className="mainList">
      {props.myList.length > 0 ? <h2 className="headings">{props.heading}</h2> : ''}
      <div className="List">

        {list}

      </div>
    </div>
  );
}
