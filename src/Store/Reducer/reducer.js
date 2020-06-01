import axios from 'axios';
const initialState = {
    myList:[],
    recommendations: []
}

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    switch(action.type) {
        case 'List_Netflix': 
          newState.myList = action.val.mylist;
          newState.recommendations = action.val.recommendations;
          break;
        case 'Add_List': 
          const Rid = newState.recommendations.findIndex((data)=> data.id === action.val);
          newState.myList.push(newState.recommendations[Rid]);
          newState.recommendations.splice(Rid,1);
          break;
        case 'Remove_List':
            const id = newState.myList.findIndex((data)=> data.id === action.val);
            newState.recommendations.push(newState.myList[id]);
            newState.myList.splice(id,1);
            break;
        case 'Error-Netflix':
            break;
    }
    return newState;
}

const fetchMoviesList = data =>{
    return {
        type: 'List_Netflix',
        val: data
    }
}

const errorMovieList = data =>{
    return {
        type: 'Error-Netflix',
        val: data
    }
}
export const fetchMovies = () =>{
    return (dispatch) =>{
        dispatch(fetchMovies)
         axios.get("netflix.json").then((response)=>{
             console.log(response);
            dispatch(fetchMoviesList(response.data));
        }).catch((err)=>{
           dispatch(errorMovieList(err));
        });
    }
}

export default myReducer;