import React from "react";

function Search({setSearch}) {

  function handleChange(e){
    e.preventDefault()
    console.log(e.target.value)
    setSearch(e.target.value)


  }

  
  return (
    <div className="ui search">
      <div className="ui icon input" >
        <input className="prompt" onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
