/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Movies.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title,items}) =>{
        return(
            <div className="movies">
                <h2>{title}</h2>
                <div className="movies-list-area">
                    <div className="movies-list">
                        {items.results.length > 0 && items.results.map((item,key)=>(
                        <div key={key} className="movies-items">
                             <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>   
                        </div>
                        ))}
                    </div>
                </div>    
            </div>
        )
}
