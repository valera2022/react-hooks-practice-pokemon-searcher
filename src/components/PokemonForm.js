import React from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({data,setData}) {

  function handleSubmit(e){
     e.preventDefault()
     const name= e.target.name.value
     const hp= e.target.hp.value
     const front= e.target.frontUrl.value
     const back= e.target.frontUrl.value


 fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers: 
      { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          "name": name,
          "hp": hp,
          "sprites": {
            "front" : front,
            "back": back
          }

         
        }
      )


      
    })
    .then(r=> r.json())
    .then(dat=> setData([...data,dat]))



  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
