// ProductReducers.js
export const defaultProduct = {
  count: 1,
  discount: 0,
  name: "Bananas",
  price: 2.99,
};

export function productReducer(state, action) {
  switch (action.type) {
    case "PLUS_COUNT": {
      let newState = { ...state }; // Copy the previous state
      newState.count = state.count + 1;
      if (newState.count >= 5) {
        newState.discount = 20;
      }
      return newState; // Return the new updated state
    }

    case "MINUS_COUNT": {
      let newState = { ...state }; // Copy the previous state
      newState.count = state.count - 1;
      if (newState.count >= 5) {
        newState.discount = 20;
      }
      if (newState.count < 0) newState.count = 0;
      return newState; // Return the new updated state
    }

    case "SET_NAME": {
      return { ...state, name: action.name };
    }

    case "SET_PRICE": {
      return { ...state, price: action.price };
    }

    default:
      throw Error("productReducer - unknown action:", action.type);
  }
}