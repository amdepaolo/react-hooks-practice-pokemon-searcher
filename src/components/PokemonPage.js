import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const[pokedex, setPokedex] = useState([]);
  const[search, setSearch] = useState('');

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(setPokedex)
  },[])

  function handleSearch(e){
    setSearch(e.target.value);
  }

  function addToDex(newPokemon){
    const updatedPokedex = [...pokedex, newPokemon];
    setPokedex(updatedPokedex)
  }

  const filteredPokedex = pokedex.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addToDex={addToDex} />
      <br />
      <Search onSearch={handleSearch} />
      <br />
      <PokemonCollection pokedex={filteredPokedex} />
    </Container>
  );
}

export default PokemonPage;
