import React from 'react';
import DisplayMovie from './DisplayMovie.jsx';
const url = 'http://localhost:3000/movies';

export default class FetchMovies extends React.Component{
    constructor (props){
        super(props);
        this.state={
            data:[],
            index:0,
            datas:[],
            length:0    
        } 
    }
    componentDidMount=()=>{
         console.log ('mounted');
        this.fetchMovies()   
        this.fetchLength()
    };

    fetchLength=()=>{
       return fetch (url)
       .then(r=>r.json())
       .then(datas=>{
        this.setState({
            datas: datas,
            length: datas.length
        })
        console.log ('length', this.state.length)
       })
    }

    fetchMovies = () => {
    console.log(url);
    return fetch(url)
        .then(r => r.json())
        .then(data => {
            console.log('movie data', data)
            console.log('indexFetch', this.state.index);
            this.setState({
                data: data[this.state.index]
            })
            console.log('updated Fetch index', this.state.index)
        })

    };

    handleAccept=()=>{
        let index=this.state.index;
        index=index.toString().slice();
        let counter= parseInt(index);
        counter++
        
        this.setState({
            index: counter
        })
        this.fetchMovies()     
    };

    handleReject=()=>{
        let index=this.state.index;
        index=index.toString().slice();
        let counter=parseInt(index);
        counter++;
        this.setState({
            index:counter
        })
        this.fetchMovies()
    };

    renderMyMovie=()=>{
            if (this.state.index>=this.state.length){
                return <h2>No more data to display</h2>
            }else{
                return <DisplayMovie key={this.state.data.id} 
                                 data={this.state.data} 
                                 handleAccept={this.handleAccept}
                                 handleReject={this.handleReject}/>  
            }
        
};
    render(){
        return(
            <div>
                {this.renderMyMovie()}
            </div>
        )
    }
};
