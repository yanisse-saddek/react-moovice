import React from 'react'
import axios from 'axios'
import Card from './Card'
export default class Popular extends React.Component{
    constructor(props){
        super(props)
        this.state={
            movies:[]
        }
    }
    componentDidMount = () =>{
        axios(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=123131ea405ceb7ba968916397a05764`).then(resultat=>{
            this.setState({
                movies:resultat.data.results
            })
        })
    }
  render(){
    return(
      <div>
          {
               this.state.movies.map(film=>{
                 return <Card data={film}/>
               })
          }
      </div>
    )
  }
}