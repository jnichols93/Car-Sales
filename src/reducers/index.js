export const initialState = {
  additionalPrice: 0,
  car: {
    price: 50000.00,
    name: '1990 Fiat Multipla',
    image:
      'https://secure.i.telegraph.co.uk/multimedia/archive/00842/motoring-graphics-2_842469a.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-4 Engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
    {id: 5, name: 'some real big spinners', price: 260},
    {id: 6, name:'A lifetime of fulfillment',price:'Priceless'}
  ]
}

export const testReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'ADD_FEATURE':
          if(state.car.features.includes(action.payload)) {
              return {
                  ...state
              };
          } else {
              return {
              ...state,
              car: {
                  ...state.car,
                  features: [...state.car.features, action.payload] 
              },
              additionalPrice: state.additionalPrice + action.payload.price,
          };
      }
      case 'REMOVE_FEATURE':
          return {
              ...state,
              car: {
                  ...state.car,
                  features: state.car.features.filter(item => item.id !== action.payload.id)
              },
              additionalPrice: state.additionalPrice - action.payload.price,
          };
      default:
          return state;
  }
}