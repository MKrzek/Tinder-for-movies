import React from 'react';
import _ from 'lodash';
export default class DisplayMovie extends React.Component{
    render(){
        console.log('Props', this.props.data)
        const{title, summary, rating, imageURL, id}=this.props.data
        return <div>
                   <h1>{title}</h1>
                   <div>{summary}</div>
                   <div>{rating}</div>
                   <img src={imageURL}/>

               </div>
    }
}