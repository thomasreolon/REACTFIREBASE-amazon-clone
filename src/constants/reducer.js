export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // add stuffs to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "SET_USER":
      // add stuffs to basket
      return {
        ...state,
        user: action.user,
      };
    case "REMOVE_FROM_BASKET":
      //remove
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((bi) => bi.id === action.id);
      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
