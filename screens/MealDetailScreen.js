import React, { useEffect, useCallback } from 'react';
import {ScrollView, Image ,View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item } from 'react-navigation-header-buttons'
import {useSelector, useDispatch} from 'react-redux'

import {MEALS } from '../data/dummy-data'
import CustomHeaderButton from '../components/HeaderButtons'
import { toggleFavorite} from '../store/actions/meals'

const ListItem = props =>{
return <View style={Styles.ListItem}><Text>{props.children}</Text></View>
}

const MealDetailScreen = props =>{
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealID')
    const CurrentMealFavorite = useSelector(state => state.meals.favoritesMeals.some(meal=> meal.id === mealId))

    const selectedMeal = availableMeals.find(meal=> meal.id === mealId)

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() =>{
        dispatch(toggleFavorite(mealId))
    },[dispatch, mealId])

    useEffect(()=>{
        props.navigation.setParams({toogleFav: toggleFavoriteHandler})
    }, [toggleFavoriteHandler])

    useEffect(()=>{
        props.navigation.setParams({isFav: CurrentMealFavorite})
    }, [CurrentMealFavorite])

    return(
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={Styles.image}/>
            <View style={Styles.Detail }>
                        <Text>{selectedMeal.duration}</Text>
                        <Text>{selectedMeal.complexity}</Text>
                        <Text>{selectedMeal.affordabilty}</Text>
            </View>
            <Text style={Styles.TItle}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => <ListItem><Text key={ingredient}>{ingredient}</Text></ListItem>)}
            <Text style={Styles.TItle}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem><Text key={step}>{step}</Text></ListItem>)}
        </ScrollView>
    );
};
MealDetailScreen.navigationOptions = (navigationData) => {
    // const mealID = navigationData.navigation.getParam('mealID')
    const mealTitle= navigationData.navigation.getParam('mealTitle')
    const ToggleFavorite = navigationData.navigation.getParam('toogleFav')
    const isFav = navigationData.navigation.getParam('isFav')
    // const selectedMeal = MEALS.find(meal=> meal.id === mealID)

    return{
        headerTitle: mealTitle,
        headerRight:() =>  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item name='ios-star' iconName={isFav ? 'ios-star' : 'ios-star-outline'} onPress={ToggleFavorite} />
        </HeaderButtons>
    };
}

const Styles = StyleSheet.create({
    image:{
        width:'100%',
        height: 200
    },
    Detail:{
        flexDirection: 'row',
        padding: 15,
        justifyContent: "space-around"
    },
    TItle:{
        fontSize: 22,
        textAlign:'center'
    },
    ListItem:{
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;