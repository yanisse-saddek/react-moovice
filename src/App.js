import React from 'react'
import {Routes, Route, NavLink} from 'react-router-dom'
import Home from './components/Home'
import Weekly from './components/Weekly'
import WeeklyBattle from './components/WeeklyBattle'
import Popular from './components/Popular'
import PopularBattle from './components/PopularBattle'
import Favorite from './components/Favorite'

export default class App extends React.Component{
  render(){
    return(
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/weekly">Weekly g</NavLink>
        <NavLink to="/weekly-battle">Weekly-Battle</NavLink>
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/popular-battle">Popular-Battle</NavLink>
        <NavLink to="/favorite">Favorite</NavLink>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/weekly" element={<Weekly/>}/>
            <Route path="/weekly-battle" element={<WeeklyBattle/>}/>
            <Route path="/popular" element={<Popular/>}/>
            <Route path="/popular-battle" element={<PopularBattle/>}/>
            <Route path="/favorite" element={<Favorite/>}/>
        </Routes>
      </div>
    )
  }
}