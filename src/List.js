import React from 'react';
import './List.css';

export default function List(props) {
    const list = props.myList.map((data,index)=><div key={index}>
      
      <div className="container">
          <div className="movieImage">
              <img src={data.img}/>
          </div>
      
      <div className="hoverButton">
      <button className="btn btn-danger" onClick={()=>props.removeList(data.id)}>Remove</button>
        </div>
      </div>
      <div>
    <label>{data.title}</label>
    </div>
      {/* <div className="container"><div><img src={data.img}/>

      <button className="btn btn-danger" onClick={()=>props.removeList(data.id)}>Remove</button>
      </div>
    <label>{data.title}</label> */}
    </div>)
  return (
    <React.Fragment>
      {props.myList.length > 0 ?<h2 className="headings">My List</h2>:''}
    <div className="List">
   
        {list}

    </div>
    </React.Fragment>
  );
}
