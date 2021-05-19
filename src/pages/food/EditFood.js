import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { editFood } from '../../redux/Food/food-actions'

import { Form, Button } from 'react-bootstrap'

const EditFood = ({ foods, editFood }) => {

  const param = useParams().id;
  const foodItem = foods.find(food => food.id === param)

  const [nameField, setNameField] = useState(foodItem.name);
  const [descriptionField, setDescriptionField] = useState(foodItem.description);
  const [ingredientsField, setIngredientsField] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const nameChangeHandler = (event) => {
    setNameField(event.target.value);
  }
  const descriptionChangeHandler = (event) => {
    setDescriptionField(event.target.value);
  }
  const ingredientsChangeHandler = (event) => {
    setIngredientsField(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const ingredients = ["Salt", "Pepper", "Hello", "World",];
    editFood(foodItem.id, nameField, descriptionField, ingredients)

    setNameField("");
    setDescriptionField("");
  }


  return (

    <div>
      <Form onSubmit={submitHandler} >
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control value={nameField} onChange={nameChangeHandler} type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control value={descriptionField} onChange={descriptionChangeHandler} as="textarea" type="text" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Edit Food
      </Button>
      </Form >
    </div>
  );
}

const mapStateToProps = state => {
  return {
    foods: state.food.foods
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editFood: (itemId, itemName, itemDescription, itemIngredients) => dispatch(editFood(itemId, itemName, itemDescription, itemIngredients))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFood);