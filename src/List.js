import React, { useRef, useState } from 'react';
import './List.css';

export default function List(props) {
  const myDiv = useRef(null);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1);
  const list = props.myList.map((data, index) => <div key={index}>

    <div className="container">
      <div className="movieImage" style={{ backgroundImage: `url(${data.img})` }}>


        <button className={props.btnClass} onClick={() => props.removeList(data.id)}>{props.btnName}</button>
      </div>
    </div>
    <div className="title">
      {data.title}
    </div>
  </div>)
  return (
    <div className="mainList">
      {props.myList.length > 0 ? <h2 className="headings">{props.heading}</h2> : ''}
      <div className="List" ref={myDiv}>

        {list}

      </div>
      {props.myList.length > 3 && left > 0 ? <a className="prev" onClick={() => {
        myDiv.current.scrollLeft -= 250
        setLeft(myDiv.current.scrollLeft);

      }}>&#10094;</a> : ''}
      {props.myList.length > 3 && left != right ? <a className="next" onClick={() => {
        myDiv.current.scrollLeft += 250;
        setRight(left)
        setLeft(myDiv.current.scrollLeft);
      }}>&#10095;</a> : ''}
    </div>
  );
}
