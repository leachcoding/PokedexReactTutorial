import React from 'react';
import {Route, Link} from 'react-router-dom';
import './Pokemon.css';
import StatsPage from '../StatsPage/StatsPage.js';

const Pokemon = props => {
  const capitalize = (str) => {
    if (typeof str !== 'string') return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <>
      <div className='card'>
        <Link to={`/detail/${props.data.id}`} >
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.data.id}.png`} alt="pokemon"/>
          <p>Id: {props.data.id}</p>
          <p>Name: {capitalize(props.data.name)}</p>
        </Link>
      </div>
      <Route exact path='detail/:id' component={StatsPage} />
    </>
  )
};

export default Pokemon;
