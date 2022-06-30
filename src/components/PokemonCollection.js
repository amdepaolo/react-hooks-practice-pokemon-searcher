import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokedex}) {
  const pokemonCards = pokedex.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
