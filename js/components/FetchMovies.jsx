import React from 'react';
import DisplayMovie from './DisplayMovie.jsx';

export default class FetchMovies extends React.Component{
    constructor (props){
        super(props);
        this.state={
            data: []
        }
    }
 componentDidMount=()=>{
     console.log ('mounted');
    const url = 'http://localhost:3000/movies'
    console.log(url);
    fetch(url)
    .then(r=>r.json())
    .then (data=>{
         console.log ('movie data', data);
         this.setState({
            data:data
         })
         })
    }
    renderMyMovie=()=>{
        console.log('thisStateData', this.state.data)
        
        return this.state.data.map(movie => {
                 console.log('movie', movie)
                      return <DisplayMovie key={movie.id} data={movie}/>
        })
   
}
    render(){
        console.log ('this', this)
        return(
            <div>
                {this.renderMyMovie()}
            </div>
        )
    }
}
