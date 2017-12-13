import React from 'react';
import ReactTouchEvents from "react-touch-events";
import DisplayMovie from './DisplayMovie.jsx';
const cors = require('cors')({origin: true});
const url = 'https://firebasestorage.googleapis.com/v0/b/tinder-for-movies.appspot.com/o/data.json?alt=media&token=64490793-b17a-4896-aeaf-73b8f65da2b6';

console.log ('url', url);

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
       exports.date=functions.https.onRequest((req, r)=>{
           cors(req, r,()=>{
               response.status(200).send({test: 'testing functions'});
           })
       return fetch (url)
       .then(r=>r.json())
       .then(datas=>{
        this.setState({
            
            length: datas.movies.length
        })
       })
    })
    }

    fetchMovies = () => {
    return fetch(url)
        .then(r => {
            if (r.ok)
            return r.json();
            else
            throw new Error ('Errors')
        })
        .then(data => {
            this.setState({
                data: data.movies[this.state.index]
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
        this.fetchMovies();
       {/*return fetch(url + '/' + this.state.data.movies.id,{
            method: 'PUT',
            body: JSON.stringify(accept),
            headers: {
                'Content-Type': 'application/json'
            }  
        }).then (r=>{
            return r;
        }) 
         console.log('this.state.data.id', this.state.data.movies.id);
    console.log ('accept', accept)*/}
    };
 
    handleReject=()=>{
        
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
        {/*this.fetchMovies()
        return fetch(url +'/'+ this.state.data.movies.id, {
                method: 'PUT',
                body: JSON.stringify(accept),
                headers: {
                    'Content-Type': 'application/json'}
                }).then(r => {
                return r;
})*/}
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
                        <div className='row justify-content-center'>
                             <img className='rounded image' src='https://cdn.empireonline.com/jpg/70/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/59395a49f68e659c7aa3a1a8/The%20Silence%20of%20the%20Lambs.jpg'/>
                        </div>
                        <div className='row'>
                            <h2 className='col text-center'>No more data to display</h2>
                        </div>
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
            <div className='container'>
                
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
