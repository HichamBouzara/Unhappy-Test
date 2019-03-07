import {
  GET_CARDS,
  GET_CARD,
  CARDS_LOADING,
  CARD_LOADING
} from '../actions/types';

const initialState = {
  cards: [],
  card: {},
  loading: false,
  cardLoading: false,
  modal: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARDS_LOADING:
      return {
        ...state,
        loading: true
      };
    case CARD_LOADING:
      return {
        ...state,
        cardLoading: true
      };
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
        loading: false
      };
    case GET_CARD:
      return {
        ...state,
        card: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
