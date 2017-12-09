import React from 'react';
import FetchMovies from './FetchMovies.jsx';
import Title from './Title.jsx';
export default class App extends React.Component{
    render(){
        return <div>
                <Title/>
                <FetchMovies/>
               </div>
    }
}