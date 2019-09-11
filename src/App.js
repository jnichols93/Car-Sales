import React from 'react';

import {connect} from "react-redux"
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
export const ADD_ITEM = 'ADD_ITEM'


const App = (props) => {


  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  // const buyItem = item => {
  //   let index = car.features.findIndex(el => el.name === item.name)
  //   index === -1 && dispatch({ type: ADD_ITEM, payload: item })
  // };
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car.features} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} />
        <Total car={props.car.price} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  car: state.car,
  store: state.store,
  additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(App);
