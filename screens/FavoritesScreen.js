import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import MealList from '../components/MealList'
import {MEALS} from '../data/dummy-data'
import CustomHeaderButton from '../components/HeaderButtons'

const FavoritesScreen = props =>{
    const favsMelas = useSelector(state => state.meals.favoritesMeals)

    if(favsMelas.length === 0 || !favsMelas){
        return (<View style={Styles.content}><Text>No favorites meals found. Start adding some!</Text></View>
        )}
        
    return(
        <MealList listData={favsMelas} navigation={props.navigation} />
    );
}

FavoritesScreen.navigationOptions = navData => {
    return {
    headerTitle: 'Your Favorites',
    headerLeft:()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item name="menu" iconName="ios-menu" onPress={()=>{
            navData.navigation.toggleDrawer();
        }}
        />
    </HeaderButtons>
}}

const Styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;