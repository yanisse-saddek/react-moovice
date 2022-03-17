import React from 'react'
import {NavLink} from 'react-router-dom'
 
export default class App extends React.Component{
   constructor(props){
    super(props)
     this.state={
                 
     }
   }
    render(){    
        return(
            <div>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/weekly">Weekly g</NavLink>
            <NavLink to="/weekly-battle">Weekly-Battle</NavLink>
            <NavLink to="/popular">Popular</NavLink>
            <NavLink to="/popular-battle">Popular-Battle</NavLink>
            <NavLink to="/favorite">Favorite</NavLink>    
            </div>
    )
}
   }