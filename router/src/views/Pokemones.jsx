import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addFavorito, removeFavorito } from '../Store/Favoritos.jsx'

const Pokemones = () => {
  const { data } = useLoaderData();

  const { results } = data;

  const favoritos = useSelector(state => state.Favoritos.value);
  const dispatch = useDispatch();

  console.log(favoritos);
  return (
  
    <div>
      <h1>Pokemones</h1>
      <h2>Favoritos: {favoritos.length}</h2>
      {results.map((pokemon, index) => {
        let etiqueta = document.querySelectorAll('a');
        //todos los links que tengan la ruta /pokemon agregar la clasname 'favorito'
        etiqueta.forEach((etiqueta) => {
          if(etiqueta.href.includes('/pokemon')){
            etiqueta.classList.add('favorito');
          }
        })        
        return (
          <React.Fragment key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <div>
                <h2>{pokemon.name}</h2>
              </div>
            </Link>
            <button onClick={() => dispatch(addFavorito(pokemon.name))}>Agregar a favoritos</button>
            <button onClick={() => dispatch(removeFavorito(pokemon.name))}>Eliminar de favoritos</button>
          </React.Fragment>          
        );
      })}
    </div>
  );
};

export default React.memo(Pokemones);
