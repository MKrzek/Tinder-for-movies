import React from 'react';
import _ from 'lodash';
export default class DisplayMovie extends React.Component{

addMovie=()=>{
    if (typeof this.props.handleAccept==='function'){
        this.props.handleAccept(this.props.data.id)
    }
};
rejectMovie=()=>{
    if (typeof this.props.handleReject==='function'){
        this.props.handleReject(this.props.data.id)
    }
};

    render(){
        console.log('Props', this.props.data)
        const{title, summary, rating, imageURL, id}=this.props.data
        return <div id={this.props.data.id}>
                   <h1>{title}</h1>
                    <h3>Rating {rating}</h3>
                   <p>Summary {summary}</p>
                   <img src={imageURL}/>
                   <div>
                   <button onClick={this.addMovie} className='btn btn-primary'>Accept</button>
                   <button onClick={this.rejectMovie} className='btn btn-danger'>Reject</button>
                   </div>
               </div>
    }
}