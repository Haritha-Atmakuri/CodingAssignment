import React, {useEffect, useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchMovies } from './Store/Reducer/reducer';
import List from './List';
import Navigation from './Navigation'


import Recommendations from './Recommedations';
function App(props) {
  const [val,updateStateVal] = useState(0);
  useEffect(()=>{
  if(val === 0){
    props.fetchMovies();
    updateStateVal(1);
  }
  console.log(props.List);
});
  return (
    <div className="App">
     <Navigation/>
      
      {/* <img src="netflixLogo.png" className="image"/> */}
      <List myList={props.List.myList} removeList={(id)=> props.removeList(id)}/>
      <Recommendations recommendations={props.List.recommendations} addToList={(id)=> props.addToList(id)}/>
    </div>
  );
}
const mapStateToProps = (state) =>{
  console.log(state);
  return {
    List: state
  }
}

const mapDispatchTOProps = (dispatch) =>{
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    removeList: (id) => dispatch({type:"Remove_List", val:id}),
    addToList: (id) => dispatch({type:"Add_List", val: id})
  }
}
export default connect(mapStateToProps,mapDispatchTOProps)(App);
