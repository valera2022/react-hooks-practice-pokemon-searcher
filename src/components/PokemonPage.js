import React,{useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({data,setData}) {
  const [search,setSearch] = useState("All")
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm data={data} setData={setData} />
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection data={data} setData={setData} search={search}/>
    </Container>
  );
}

export default PokemonPage;
