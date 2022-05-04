import React from 'react';
import './FeaturedMovie.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({item}) => { 


    let firstDate = new Date(item.first_air_date);

    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return(
        <section className="featured" style={{
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundImage:  `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
           
        <div className="feartured-vertical">
            <div className="feartured-horizontal">
                <div className="feartured-name">{item.original_name}</div>  
                <div className="feartured-info">
                    <div className="feartured-points">{item.vote_average} pontos</div>
                    <div className="feartured-year">{firstDate.getFullYear()}</div>
                    <div className="feartured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}</div>
                </div>
                <div className="feartured-description">{item.overview}</div>
                <div className="feartured-buttons">
                    <a href={`/woth/${item.id}`} className="feartured-wothbutton" >Assistir</a>
                    <a href={`/list/add/${item.id}`}className="feartured-mylistbutton">+Minha Lista</a>
                </div>
                <div className="feartured-genres"><strong>Generos:</strong>{genres.join(', ')}</div>
            </div>  
            
        </div>   
        </section>

    )
}