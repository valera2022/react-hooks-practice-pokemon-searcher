import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemons}) {
  const{id,name,hp,sprites} = pokemons
  const[src,setsrc]= useState(true)

  


 function handleClick(){
  setsrc(!src)
      
 }


  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={src? sprites.front : sprites.back} onClick={handleClick}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
