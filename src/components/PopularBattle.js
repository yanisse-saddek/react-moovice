import React from 'react'
import axios from 'axios'
import Card from './Card'
import {getPopularMovies} from '../utils/network'
import "../App.css"

export default class PopularBattle extends React.Component{
  constructor(props){
    super(props)
    this.state={
      movies:[],
      currentBattle:0,
      page:1
    }
  }
  componentDidMount = ()=>{
    var popularMovies = getPopularMovies()
    var m = popularMovies.then(result=>{
      this.setState({
        movies:result.data.results,
        ok:true
      })
      console.log(this.state.movies)      
    })
  }

  saveStorage = (id)=>{
    
    var moviesList = []
    moviesList = JSON.parse(localStorage.getItem('favorites')) || []
    if(moviesList.includes(id) == false){
      moviesList.push(id)
    }    localStorage.setItem('favorites', JSON.stringify(moviesList));

    var NewBattle = this.state.currentBattle + 2
    this.setState({
      currentBattle: NewBattle
    })
    if(this.state.currentBattle>=this.state.movies.length-2){
      var newPage= this.state.page+1
      this.setState({
        page:newPage,
        currentBattle:0,
      })
      this.componentDidMount()
    }
  }
  render(){
    return(
      <div class="d-flex justify-content-center">
        <div class="battle-movie">
        {
          this.state.movies.map((movie, index)=>{
            if(index<=this.state.currentBattle+1 && index>=this.state.currentBattle){
              var id = movie.id
              return (
                <div style={{margin:"10px"}}onClick={()=>{this.saveStorage(id)}}>
                  <Card data={movie}/>

                </div>
              )
            }
          })
        }
        </div>
      </div>
    )
  }
}
               

