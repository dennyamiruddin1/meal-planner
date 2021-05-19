import * as actionTypes from './food-types'

const INITIAL_STATE = {
  foods: [
    {
      id: "3fawff23",
      name: "Chicken Curry",
      description: "Delightful chicken curry",
      ingredients: [
        "Salt", "Pepper", "Chicken", "Love",
      ]
    },
    {
      id: "awdacww3e",
      name: "Beef Rendang",
      description: "Very delicious beef rendang",
      ingredients: [
        "Salt", "Pepper", "Beef", "Love",
      ]
    },
    {
      id: "jaw90da90",
      name: "Mac and Cheese",
      description: "Boring dish",
      ingredients: [
        "Salt", "Cheese", "Macaroni", "Hate",
      ]
    },
  ],
  users: [
    {
      id: "micmoiem2",
      firstname: "Denny",
      lastname: "Amiruddin",
      age: 26,
      sex: "Male",
      email: "dennyamiruddin@outlook.com",
      password: "somethingsomething"
    },
    {
      id: "awd3dsefcs",
      firstname: "Jane",
      lastname: "Doe",
      age: 26,
      sex: "Female",
      email: "janedoe@outlook.com",
      password: "anythinganything"
    }
  ]
}

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_FOOD:
      return {
        ...state,
        foods: [...state.foods, action.payload.item]
      }
    case actionTypes.REMOVE_FOOD:
      return {
        ...state,
        foods: state.foods.filter(food => food.id !== action.payload.id)
      }
    case actionTypes.EDIT_FOOD:
      return {
        ...state,
        foods: state.foods.map(food =>
          food.id === action.payload.id ?
            {
              ...food,
              name: action.payload.name,
              description: action.payload.description,
              ingredients: action.payload.ingredients
            }
            : food)
      }
    default:
      return state
  }
}

export default foodReducer;