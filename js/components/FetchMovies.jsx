import React from 'react';
import DisplayMovie from './DisplayMovie.jsx';

export default class FetchMovies extends React.Component{
    constructor (props){
        super(props);
        this.state={
            data:[],
            index:0,
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
               data:data[this.state.index]
         })
        
         })
    };

    handleAccept=()=>{
        let index=this.state.index;
        index=index.toString().slice()
        let counter= parseInt(index)
        counter++
        this.setState({
            index: counter
        })
          console.log('updated state', this.state.index)

    }

    renderMyMovie=()=>{
        console.log('thisStateData', this.state.data)
            return <DisplayMovie key={this.state.data.id} 
                                 data={this.state.data} 
                                 handleAccept={this.handleAccept}
                                 handleReject={this.handleReject}/>  
};
    render(){
        
        return(
            <div>
                {this.renderMyMovie()}
            </div>
        )
    }
};
