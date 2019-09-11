export const initialState = {
  additionalPrice: 0,
  car: {
    price: 50000.00,
    name: '2019, BMW M3 Or something IDK',
    image:
      'https://static.carsdn.co/cldstatic/wp-content/uploads/img1937906909-1540911513852.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-4 Engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 },
    {id: 5, name: 'some real big spinners', price: 260},
    {id: 6, name: 'those bright af for no reason headlights that annoy everyone infront of you guarenteed', price:500},
    {id: 7, name:'A lifetime of fulfillment', price: '100000'},
    {id: 8, name: 'Turn signals that show the opposite of whichever way you are turning.', price: 25.00}
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