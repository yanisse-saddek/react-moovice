import moment from 'moment'
import axios from 'axios'

var API_KEY = "123131ea405ceb7ba968916397a05764"
var LAST_WEEK = moment().startOf('week').subtract(7,'days').format('YYYY-MM-DD')
var TODAY = moment().format('YYYY-MM-DD')

 function getLatestMovies (page) {
    if(page){
        var url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}&page=${page}`
        var data =  axios(url)
        return data   
    }else{
        var url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}    `
        var data =  axios(url)
        return data 
    }
}

function getPopularMovies(page){
    console.log("page",page)
    var url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=123131ea405ceb7ba968916397a05764&page=${page}`
    var data = axios(url)
    return data
}
function getMovie(id){
    var url = `http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    var data = axios(url)
    return data
  }
export   {getLatestMovies, getPopularMovies, getMovie}