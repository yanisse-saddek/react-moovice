import React from 'react'
import axios from 'axios'
import Card from './Card'

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
    axios(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=123131ea405ceb7ba968916397a05764&page=${this.state.page}`).then(resultat=>{
      console.log(this.state.page)   
      this.setState({
        movies:resultat.data.results
        })
    })
  }

  saveStorage = (id)=>{
    localStorage.setItem('favorites',id)  
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
        {
          this.state.movies.map((movie, index)=>{
            if(index<=this.state.currentBattle+1 && index>=this.state.currentBattle){
              var id = movie.id
              return (
                <div onClick={()=>{this.saveStorage(id)}}>
                  <Card data={movie}/>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}
               