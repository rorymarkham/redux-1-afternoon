import {createStore} from 'redux'

const initialState = {
    name: '',
    category: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME'
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY'
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS'
export const ADD_RECIPE = 'ADD_RECIPE'

function reducer(state= initialState, action){
    const { type, payload } = action;
  switch (type){
        case UPDATE_RECIPE_NAME:
        return {
            ...state, name: payload
        }
        case UPDATE_RECIPE_CATEGORY:
        return {
            ...state, category: payload
        }
        case UPDATE_FIRST_NAME:
        return {
            ...state, authorFirstName: payload
        }
        case UPDATE_LAST_NAME:
        return {
            ...state, authorLastName: payload
        }
        case UPDATE_INGREDIENTS:
            const addIngredients = [...state.ingredients, payload]
        return {
            ...state, ingredients: addIngredients
        }
        case UPDATE_INSTRUCTIONS:
        const addInstructions = [...state.instructions, payload]
        return {
            ...state, instructions: addInstructions
        }
        case ADD_RECIPE:
        const {
        name, 
        category,
        authorFirstName, 
        authorLastName, 
        ingredients, 
        instructions} = state
        const recipe = {
        name, 
        category, 
        authorFirstName, 
        authorLastName, 
        ingredients, 
        instructions}
        const newRecipes = [...state.recipes, recipe]
        return {...state, recipes: newRecipes}
        default:
        return state
    }
}

export default createStore(reducer)