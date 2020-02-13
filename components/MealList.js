import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem'
import {useSelector} from 'react-redux'

const MealList = props => {
    const favoriteMeals = useSelector(state=> state.meals.favoritesMeals)

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                onSelectMeal={() => props.navigation.navigate({
                    routeName: 'MealDetail', 
                    params: {
                        mealID: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFavorite
                    }
                })}
                complexity={itemData.item.complexity.toUpperCase()}
                affordabilty={itemData.item.affordabilty.toUpperCase()}
                image={itemData.item.imageUrl}
            />
        )
    }
    return (
        <View style={Styles.list}>
            <FlatList data={props.listData} renderItem={renderMealItem} style={{ width: '95%' }} />
        </View>
    );
}

const Styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15

    }
})

export default MealList