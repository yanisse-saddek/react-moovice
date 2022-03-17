import React from 'react'
import "../App.css"
export default class Card extends React.Component{
    constructor(props){
        super(props)
        this.state  = {
            desc: null
        }
    }
    componentDidMount = ()=>{
        var description = this.props.data.overview 
        this.setState({
            desc:description.substring(0, 150)
        })
    }
    render(){
        
        return(
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/w300/${this.props.data.poster_path}`}/>
                <div className="card-body">
                    <p className="card-title">{this.props.data.original_title}</p>
                    <p className="card-text">{this.props.data.release_date}</p>
                    <p className="card-text">{this.state.desc}</p>
                </div>
            </div>
        )
    }
}