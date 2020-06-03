import React, { useEffect, useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchMovies } from './Store/Reducer/reducer';
import List from './List';
import Navigation from './Navigation'



function App(props) {
  const [val, updateStateVal] = useState(0);
  useEffect(() => {
    if (val === 0) {
      props.fetchMovies();
      updateStateVal(1);
    }
    console.log(props.List);
  });
  return (
    <div className="App">
      <Navigation />


      <List myList={props.List.myList} heading="My List" btnName="Remove" btnClass="btn btn-danger" removeList={(id) => props.removeList(id)} />
      <List myList={props.List.recommendations} heading="My Recommendations" btnName="Add" btnClass="btn btn-success" removeList={(id) => props.addToList(id)} />

    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    List: state
  }
}

const mapDispatchTOProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(fetchMovies()),
    removeList: (id) => dispatch({ type: "Remove_List", val: id }),
    addToList: (id) => dispatch({ type: "Add_List", val: id })
  }
}
export default connect(mapStateToProps, mapDispatchTOProps)(App);
