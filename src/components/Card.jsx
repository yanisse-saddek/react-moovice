import React from 'react'

export default class Card extends React.Component{
    render(){
        return(
            <div className="card" style={{width: '10rem'}}>
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w300/${this.props.data.poster_path}`}/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.original_title}</h5>
                    <p className="card-text">{this.props.data.release_date}</p>
                    <p className="card-text">{this.props.data.overview}</p>
                </div>
            </div>
        )
    }
}