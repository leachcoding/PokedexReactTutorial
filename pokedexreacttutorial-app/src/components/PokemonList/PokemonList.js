import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {withRouter} from 'react-router';
import Pokemon from '../Pokemon/Pokemon.js';
import './PokemonList.css';

function PokemonList(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://pokeapi.co/api/v2/pokemon/')
        .then(res => {
          console.log(res.data.results);
          let pokemonValue = res.data.results;
          pokemonValue.map(pokemon => {
            let regexPat = /\/pokemon\/(\d+)\//;
            let id = pokemon.url.match(regexPat)[1];
            return (pokemon['id'] = id);
          })
          console.log(pokemonValue, "Pokemon Val");
          setData(pokemonValue);
        })
        .catch(err => {
          console.log('err', err);
        });
    };

    fetchData();
  }, []);
  return (
    <>
      <div className='cards'>
        {data.map(item => <Pokemon data={item} key={item.name} />)}
      </div>
    </>
  );
}

export default withRouter(PokemonList);
