export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // add stuffs to basket
      break;
    case "REMOVE_FROM_BASKET":
      //remove
      break;
    default:
      return state;
  }
}

export default reducer;
