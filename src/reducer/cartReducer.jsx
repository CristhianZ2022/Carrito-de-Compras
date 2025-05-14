export const initialState = JSON.parse(window.localStorage.getItem('cart')) || [];

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state));
}

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload, quantity } = action;

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload;
      const productExists = state.findIndex(item => item.id === id);

      if (productExists !== -1) {
        const newState = structuredClone(state);
        newState[productExists].quantity = quantity;
        newState[productExists].price = parseFloat(newState[productExists].originalPrice * quantity).toFixed(2);
        updateLocalStorage(newState);
        
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
          originalPrice: actionPayload.price
        }
      ]

      updateLocalStorage(newState);
      return newState;
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload;

      const newState = state.filter(item => item.id !== id);
      updateLocalStorage(newState);

      return newState;
    }

    case 'CLEAR_CART': {
      updateLocalStorage([]);
      
      return [];
    }

    default: {
      return state;
    }
  }
}