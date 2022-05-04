import React,{useEffect, useState} from 'react';
import './App.css';
import Tmdb from './tmdb'
import Movies from './components/Movies'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => { 

    const [movieList, setMovielist] = useState([]);
    const [featuredData, setFearturedData] = useState([]);
    useEffect(() =>{
      //Buscando Lista de Filmes
      const loadAll = async () =>{
        let list = await Tmdb.getListFilms();
        setMovielist(list);

        //Colocar um Filme em Destaque
        let originals = list.filter(i=>i.slug==='originals');
        
        let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length - 1));
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
        setFearturedData(chosenInfo);
        }
      loadAll();
    }, []);


    return(
      <div className='page'>

        <Header/>

        {featuredData &&
        <FeaturedMovie item={featuredData}/>}
        
        <section className='lists'>
          {movieList.map((item,key)=>(
            <Movies key={key} title={item.title} items={item.items}/>
          ))}

        </section>
      </div>

    );
  
}
