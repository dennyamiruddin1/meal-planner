import * as actionTypes from './food-types';

export const addFood = (item) => {
  return {
    type: actionTypes.ADD_FOOD,
    payload: {
      item: item
    }
  }
}

export const removeFood = (itemId) => {
  return {
    type: actionTypes.REMOVE_FOOD,
    payload: {
      id: itemId
    }
  }
}

export const editFood = (itemId, itemName, itemDescription, itemIngredients) => {
  return {
    type: actionTypes.EDIT_FOOD,
    payload: {
      id: itemId,
      name: itemName,
      description: itemDescription,
      ingredients: itemIngredients
    }
  }
}