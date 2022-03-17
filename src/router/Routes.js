import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home'
import Weekly from '../components/Weekly'
import WeeklyBattle from '../components/WeeklyBattle'
import Popular from '../components/Popular'
import PopularBattle from '../components/PopularBattle'
import Favorite from '../components/Favorite'

export default class App extends React.Component{
   constructor(props){
    super(props)
     this.state={
                 
     }
    }
     render(){    
        return(
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/weekly" element={<Weekly/>}/>
                <Route path="/weekly-battle" element={<WeeklyBattle/>}/>
                <Route path="/popular" element={<Popular/>}/>
                <Route path="/popular-battle" element={<PopularBattle/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
            </Routes>          
    )
}
}