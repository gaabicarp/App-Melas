import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { useSelector } from 'react-redux'

import {CATEGORIES} from '../data/dummy-data'
import MealList from '../components/MealList';

const CategoryMealScreen = props =>{

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const catID = props.navigation.getParam('categoryID');
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catID) >= 0)

    if(displayedMeals.length === 0){
        return <View style={Styles.screen}><Text>No meals found, maybe check your filters!</Text></View>
    }

    return(
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catID = navigationData.navigation.getParam('categoryID');
    const selectedCategory = CATEGORIES.find(cat => {
        return cat.id === catID;
    });

    return{
        headerTitle: selectedCategory.title
    }
}

const Styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;