import React from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

const FoodDetails = ({ foods }) => {
  const param = useParams().id
  const content = foods.find(food => food.id === param)
  return (
    <div>
      <ul>
        <li>
          Name: {content.name}
        </li>
        <li>
          Description: {content.description}
        </li>
        <li>
          Ingredients:
          <ul>
            {content.ingredients.map((item, index) =>
              <li key={index}>
                {item}
              </li>)}
          </ul>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    foods: state.food.foods,
  }
}
export default connect(mapStateToProps)(FoodDetails);