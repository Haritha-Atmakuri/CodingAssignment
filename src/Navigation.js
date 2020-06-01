import React, {Component} from 'react'
import './List.css';
export default class Navigation extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" className="navbar">
                <a className="navbar-brand" href="#">
                    <img src="netflixLogo.png" className="image"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <h2 className="text">Movies</h2>
                </nav>
            </div>
        )
    }
}