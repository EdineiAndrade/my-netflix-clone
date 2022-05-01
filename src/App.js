import React,{useEffect, useState} from 'react';
import Tmdm from './tmdb'
import Movies from './components/Movies'
import './App.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => { 

    const [movieList, setMovielist] = useState([]);

    useEffect(() =>{
      const loadAll = async () =>{
        let list = await Tmdm.getListFilms();
        setMovielist(list);
      }
      loadAll();
    }, []);


    return(
      <div className='page'>
        <section className='lists'>
          {movieList.map((item,key)=>(
            <Movies key={key} title={item.title} items={item.items}/>
          ))}

        </section>
      </div>

    );
  
}
