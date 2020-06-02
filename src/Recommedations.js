import React, { useRef, useState } from 'react';
import './List.css';

export default function Recommendations(props) {
  const myDiv = useRef(null);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(1);
  const list = props.recommendations.map((data, index) => <div key={index}>
     <div className="container">
     <div className="movieImage" style={{ backgroundImage: `url(${data.img})` }}>
       {/* <img src={data.img} style={{width:"75%"}}/> */}

       <button className="btn btn-success" onClick={() => props.addToList(data.id)}>ADD</button>
     </div>

     {/* <div className="hoverButton">
     <button className="btn btn-danger" onClick={()=>props.removeList(data.id)}>Remove</button>
       </div> */}
   </div>
   <div className="title">
    {data.title}
   </div>

   {/* <div className="container"><div><img src={data.img}/>

     <button className="btn btn-danger" onClick={()=>props.removeList(data.id)}>Remove</button>
     </div>
   <label>{data.title}</label> */}
 </div>)
  return (
    <div className="mainList">
      {props.recommendations.length > 0 ? <h2 className="headings">Recommendations</h2> : ''}
      <div className="List" ref={myDiv}>

        {list}

      </div>
      {props.recommendations.length > 3 && left > 0 ? <a className="prev" onClick={() => {
        myDiv.current.scrollLeft -= 150
        setLeft(myDiv.current.scrollLeft);

      }}>&#10094;</a> : ''}
      {props.recommendations.length > 3 && left != right ? <a className="next" onClick={() => {
        myDiv.current.scrollLeft += 150;
        setRight(left)
        setLeft(myDiv.current.scrollLeft);
      }}>&#10095;</a> : ''}
    </div>
  );
}
