import React from 'react'

export default class Card extends React.Component{
    render(){
        return(
            <div>
                <img style={{height:"150px"}}src={`https://image.tmdb.org/t/p/w300/${this.props.data.poster_path}`}/> 
                <p>{this.props.data.original_title}</p>
                <p>{this.props.data.release_date}</p>
                <p>{this.props.data.overview}</p>
            </div>
        )
    }
}