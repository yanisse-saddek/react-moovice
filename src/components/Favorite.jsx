import React from 'react'
import axios from 'axios'
import Card from './Card'
import {getMovie} from '../utils/network'

export default class Favorite extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      movies:false,
      favIDs:this.getStorage()
    }
  }
  componentDidMount = ()=>{
    var data = []
      this.state.favIDs.map(movie=>{
        var movie = getMovie(movie)
        var m = movie.then(result=>{
          data.push(result.data)
          this.setState({
            movies:data,
            ok:true
          })
          console.log("oki", data)  
        })
      })
  }
  getStorage = ()=>{
    var data = JSON.parse(localStorage.getItem('favorites'))
    return data
  }

  render(){
    return(
      <div className='movies-list'>
        {this.state.movies?
          this.state.movies.map(movie=>{
            return <Card data={movie}/>
          })
          :<p>vide</p>
        }
      </div>
    )
  }
}