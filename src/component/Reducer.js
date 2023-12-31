export const intialstage = {
  basket: [],
};

export const getTotalbasket = (basket) => {
  const TotalAmount = basket?.reduce((amount, item) => item.price + amount, 0);
  return TotalAmount;
};


export const reducer = (state = intialstage, action) => {

  switch (action.type) {
    case "ADD":
    
      console.log( "first" , intialstage.basket)

      return { ...state, basket: [...state.basket, action.payload] };

      case "REMOVE_TO_CART":
        let newbasket = [...state.basket];
        const index = state.basket.findIndex(
          (basketitem) => basketitem.id === action.id
        );
        if (index >= 0) {
          newbasket.splice(index, 1);
        } else {
        }
  
        return { ...state, basket: newbasket };

    default:
      return state;
  }
};
