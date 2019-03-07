import axios from 'axios'

import {
  GET_CARDS,
  CARDS_LOADING,
  CARD_LOADING,
  GET_CARD,
  CLEAR_ERRORS,
  GET_ERRORS
} from './types'


// Get Cards
export const getCards = (page) => dispatch => {
  dispatch(setCardsLoading())
  axios
    .get(`/api/products?page=${page}`)
    .then(res =>
      dispatch({
        type: GET_CARDS,
        payload: res.data.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    )
}

// Get Card
export const getCard = id => dispatch => {
  dispatch(setCardLoading())
  axios
    .get(`/api/product/${id}`)
    .then(res =>
      dispatch({
        type: GET_CARD,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    )
}

// Set loading state
export const setCardsLoading = () => {
  return {
    type: CARDS_LOADING
  }
}
export const setCardLoading = () => {
  return {
    type: CARD_LOADING
  }
}

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}
