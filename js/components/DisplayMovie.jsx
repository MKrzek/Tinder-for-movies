import React from 'react';

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
                <div className='row'>
                   <h2 className='col text-center'>{title}</h2>
                </div>
                <div className='row'>
                    <h3 className='col text-center'>Rating {rating}</h3>
                </div>
                <div className='row'>
                   <p className='col text-center'>Summary {summary}</p>
                </div>
                   <div className='row justify-content-center'>
                        <div className='col text-center'> 
                            <img className='rounded image' src={imageURL}/>
                        </div>
                    </div>
                   <div className='row justify-content-center buttons align-self-end'>
                        <button onClick={this.addMovie} className='btn btn-primary btn-md col-4 align-self-end'>Accept</button>
                        <button onClick={this.rejectMovie} className='btn btn-danger btn-md col-4 align-self-end'>Reject</button>
                   </div>
               </div>
    }
}