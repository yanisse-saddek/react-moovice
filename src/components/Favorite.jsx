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
    this.movieList()
  }
  movieList= ()=>{
    var data = []
    this.setState({
      favIDs:this.getStorage()
    })
    if(this.state.favIDs){
      this.state.favIDs.map(movie=>{
        var movie = getMovie(movie)
        var m = movie.then(result=>{          
          data.push(result.data)
          this.setState({
            movies:data,
            ok:true,
          })
        })
      }) 
    }
  }
  getStorage = ()=>{
    var data = JSON.parse(localStorage.getItem('favorites'))
    return data
  }
  remove = (movie)=>{
    console.log(localStorage.getItem('favorites'))
    var data = JSON.parse(localStorage.getItem('favorites'))
    if(data.includes(movie.id)){
      data.splice(data.indexOf(movie.id), 1)
       localStorage.setItem('favorites', JSON.stringify(data));
       console.log(localStorage.getItem('favorites'))
       this.movieList()
    }
  }

  render(){
    return(
      <div className='movies-list'>
        {this.state.movies?
          this.state.movies.map(movie=>{
            return (
                    <Card onClick={this.remove} data={movie}/>
            )
          })
          :<p>vide</p>
        }
      </div>
    )
  }
}

