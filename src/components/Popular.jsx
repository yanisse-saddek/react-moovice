import React from 'react'
import axios from 'axios'
import {getPopularMovies} from '../utils/network'
import Card from './Card'
import '../App.css'
export default class Popular extends React.Component{
    constructor(props){
        super(props)
        this.state={
            movies:[],
            page:1
        }
    }
    componentDidMount = () =>{
        this.getMovies()
    }
    getMovies = ()=>{
      var popularMovies = getPopularMovies(this.state.page)
      var m = popularMovies.then(result=>{
        this.setState({
          movies:result.data.results,
          ok:true
        })
        console.log(this.state.movies)      
      })
    }
    changePage= (val)=>{
      if(val){
        this.setState({
          page:this.state.page+1
        })
      }else if(val===false && this.state.page!==1){
        this.setState({
          page:this.state.page-1
        })
      }
      this.getMovies(this.state.page)  

    }
  render(){
    return(
      <>
      <div id="app" class="container">  
      <p className="page-title">Page{this.state.page}</p>
        <ul class="page">
            {this.state.page>1?<li onClick={()=>{this.changePage(false)}} class="page__numbers">{this.state.page-1}</li>:null}
            <li class="page__numbers">{this.state.page}</li>
            <li onClick={()=>{this.changePage(true)}} class="page__numbers">{this.state.page+1}</li>
          </ul>
      </div>
      <div className="movies-list">
          {
               this.state.movies.map(film=>{
                 return <Card data={film}/>
               })
          }
      </div> 
      </>
    )
  }
}