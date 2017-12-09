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
        .then(r => {
            if (r.ok)
            return r.json();
            else
            throw new Error ('Errors')
        })
        .then(data => {
            console.log('movie data', data)
            console.log('indexFetch', this.state.index);
            this.setState({
                data: data[this.state.index]
            })
        })
        .catch(err => {
            console.log(err);
        });  
    };

    handleAccept=()=>{
        const accept={accept:'true'};
        let index=this.state.index;
        index=index.toString().slice();
        let counter= parseInt(index);
        counter++
        this.setState({
            index: counter
        })
        this.fetchMovies() 
       return fetch(url + '/' + this.state.data.id,{

            method: 'PUT',
            body: JSON.stringify(accept),
            headers: {
                'Content-Type': 'application/json'
            }
            
        }).then (r=>{
            return r;
        })   
         console.log('this.state.data.id', this.state.data.id);
         console.log ('accept', accept)
    };

    handleReject=()=>{
      const accept = {accept: 'false'};
        let index=this.state.index;
        index=index.toString().slice();
        let counter=parseInt(index);
        counter++;
        this.setState({
            index:counter
        })
        this.fetchMovies()
        return fetch(url + '/' + this.state.data.id, {
                method: 'PUT',
                body: JSON.stringify(accept),
                headers: {
                    'Content-Type': 'application/json'}
                }).then(r => {
                return r;
})
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
