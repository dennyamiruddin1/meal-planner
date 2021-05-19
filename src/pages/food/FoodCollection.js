import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeFood } from '../../redux/Food/food-actions'

import Food from './components/Food'




const FoodCollection = ({ foods, removeFood }) => {
  return (
    <div>
      <ul>
        {foods.map(food => (
          <div key={food.id}>
            <Food
              name={food.name}
            />
            <Link to={`/food/${food.id}`}>
              <button>Detail</button>
            </Link>
            <Link to={`/food/edit/${food.id}`}>
              <button>Edit</button>
            </Link>

            <button onClick={() => removeFood(food.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div >

  );
};

const mapStateToProps = state => {
  return {
    foods: state.food.foods,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFood: (itemId) => dispatch(removeFood(itemId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodCollection);