import React,{useEffect,useState} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({data,setData,search}) {
 
  useEffect(()=>{ fetch("http://localhost:3001/pokemon")
  .then((r)=> r.json())
  .then(dat => setData(dat))
},[])
 

 const itemsToDisplay = data.filter((item) => {
    if (search === "All") return true;
    // .filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
      
  })

  console.log(itemsToDisplay)

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>

      {itemsToDisplay.map((pokemons)=> <PokemonCard pokemons={pokemons}/>)}
      
    </Card.Group>
  );
}

export default PokemonCollection;
