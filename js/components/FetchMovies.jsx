import React from 'react';
import ReactTouchEvents from "react-touch-events";
import DisplayMovie from './DisplayMovie.jsx';

const url = 'https://localhost:3000/movies';

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
            this.setState({
                data: data[this.state.index]
            })
        })
        .catch(err => {
            console.log(err);
        });  
    };

    handleAccept=()=>{
        this.acceptFetch()
    };



    acceptFetch=()=>{
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
q   
    handleReject=()=>{
        console.log('This', this)
        this.rejectFetch()
    };


    rejectFetch=()=>{
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

handleSwipe=(direction)=>{
    switch(direction){
        case 'right':
           return this.acceptFetch();
        case 'left':
           return this.rejectFetch();
                  console.log (`you swiped ${direction}`)
    }
}



    renderMyMovie=()=>{
        if (this.state.index>=this.state.length){
            return (<div>
                       <img src='https://www.fukuleaks.org/web/wp-content/uploads/2014/05/shocked-kitten.jpeg'/>
                    <h2>No more data to display</h2>
                    </div>)
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
                <div>
                    {this.renderMyMovie()}
                </div>
                <div>
                    <ReactTouchEvents onSwipe={this.handleSwipe}/>
                </div>
             </div>
        )
    }
};
