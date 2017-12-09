import React from 'react';
export default class DisplayMovie extends React.Component{

 componentDidMount=()=>{
     console.log ('mounted')
    const url = 'http://localhost:3000/movies'
    console.log(url)
    fetch(url)
    .then(r=>r.json())
    .then (data=>{
         console.log ('movie data', data)
         })
    }
 
    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}
