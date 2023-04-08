import React,{useState} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const[data,setData]= useState([])


  return (
    <div className="App">
      <PokemonPage data={data} setData={setData} />
    </div>
  );
}

export default App;
