/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

import MealsNavigator from './navigator/MealsNavigator'
import {useScreens, enableScreens} from 'react-native-screens';
import mealsReducer from './store/reducer/meals'

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer);

export default App = props => {
  return(
    <Provider store={store}><MealsNavigator/></Provider>
  )
}

const styles = StyleSheet.create({

});

