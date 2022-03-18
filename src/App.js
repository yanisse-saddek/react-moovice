import React from 'react'
import Nav from './links/Nav'
import Router from './router/Routes'
import "./App.css"
export default class App extends React.Component{
  componentDidMount = ()=>{
    localStorage.removeItem('favorites')
  }
  render(){
    return(
      <div>
        <nav>
            <img src="/img/nav.png"/>
            <Nav/>
        </nav>
        <Router/>
      </div>
    )
  }
}