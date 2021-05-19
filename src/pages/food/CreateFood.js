import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addFood } from '../../redux/Food/food-actions'

import Ingredients from './components/Ingredients'

import { Form, Button } from 'react-bootstrap'

const CreateFood = ({ addFood }) => {

  const [nameField, setNameField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [ingredientsField, setIngredientsField] = useState("");
  const [ingredients, setIngredients] = useState([]);


  // Change Handler
  const nameChangeHandler = (event) => {
    setNameField(event.target.value);
  }
  const descriptionChangeHandler = (event) => {
    setDescriptionField(event.target.value);
  }
  const ingredientsChangeHandler = (event) => {
    setIngredientsField(event.target.value);
  }

  // Form submission handler
  const submitHandler = (event) => {

    // Preventing the form from reloading the page once the form is submit
    event.preventDefault();

    // Creating a new item object
    const newItem = {
      id: "fid" + Math.floor(Math.random()),
      name: nameField,
      description: descriptionField,
      ingredients: ingredients
    }

    addFood(newItem)

    // Setting the input fields to an empty string once it is completed
    setNameField("");
    setDescriptionField("");
    setIngredientsField("");
  }

  // Adding ingredients handler
  const addIngredientsHandler = () => {

    setIngredients(
      prevIngredients => {
        return [...prevIngredients, ingredientsField]
      }
    )

    // Setting ingredients input field to an empty string
    setIngredientsField("");
  }

  const removeIngredientHandler = (event) => {
    const newIngredients = [...ingredients]
    newIngredients.splice(event.target.value, 1)
    setIngredients(newIngredients)
  }

  return (
    <React.Fragment>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control value={nameField} onChange={nameChangeHandler} type="text" placeholder="Enter Food's Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control value={descriptionField} onChange={descriptionChangeHandler} as="textarea" type="text" placeholder="Enter Food's Description" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ingredients:</Form.Label>
          <Form.Control value={ingredientsField} onChange={ingredientsChangeHandler} type="text" placeholder="Enter Ingredients' Name" />
          <Button variant="info" type="button" onClick={addIngredientsHandler}>
            Add Ingredients
         </Button>
          {
            ingredients.length > 0 ?
              <div>
                <p>
                  Current added {ingredients.length > 1 ? <span>Ingredients: </span> : <span>Ingredient: </span>}
                </p>
                <ul>
                  {ingredients.map((ingredient, index) =>
                    <div key={index}>
                      <Ingredients
                        item={ingredient}
                      />
                      <Button value={index} onClick={removeIngredientHandler}>Remove
                      </Button>
                    </div>
                  )}
                </ul>
              </div>
              : null
          }

        </Form.Group>
        <Button variant="success" type="submit">
          Add Food
      </Button>
      </Form >

    </React.Fragment>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addFood: (item) => dispatch(addFood(item))
  }
}

export default connect(null, mapDispatchToProps)(CreateFood);