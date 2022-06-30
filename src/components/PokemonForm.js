import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addToDex}) {
  const[formObj, setFormObj] = useState({
    name: '',
    hp: 0,
    front: '',
    back: ''
  });

  function formUpdater(value, key){
    const updatedForm = {...formObj, [key]: value};
    setFormObj(updatedForm);
    console.log(formObj)
  }

  function handleSubmit(){
    const submitForm = {
      name: formObj.name,
      hp: formObj.hp,
      sprites:{front: formObj.front, back: formObj.back}
    };
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitForm)})
    .then(r => r.json())
    .then(addToDex)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={e => formUpdater(e.target.value, 'name')} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={e => formUpdater(e.target.value, 'hp')} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={e => formUpdater(e.target.value, 'front')}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={e => formUpdater(e.target.value, 'back')}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
