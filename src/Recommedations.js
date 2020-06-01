import React from 'react';
import './List.css';

export default function Recommendations(props) {
    const list = props.recommendations.map((data,index)=><div key={index}>
      <div className="container">
          <div className="movieImage">
              <img src={data.img}/>
          </div>
      
      <div className="hoverButton"><button  className="btn btn-success pl-3 pr-3" onClick={()=>props.addToList(data.id)}>Add</button></div>
      </div>
      <div>
    <label>{data.title}</label>
    </div>
    </div>)
  return (
      <React.Fragment>
           {props.recommendations.length > 0 ?    <h2 className="headings">Recommendations</h2> : ''}
 <div className="List">
      
        {list}

    </div>
    </React.Fragment>
  );
}
