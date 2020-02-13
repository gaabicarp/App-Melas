import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'
import FavoritesScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FilterScreen'


const defaultStackNavOptions ={
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeal: {
        screen: CategoryMealScreen
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
},
{
    defaultNavigationOptions: defaultStackNavOptions
})

const tabsScreenConfig = {
    Meals: {
        screen: MealNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) =>{
                return <Icon name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    favorites: {
        screen: FavNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) =>{
                return <Icon name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }       
    }
}

const MealsFavTabNavigator =
createBottomTabNavigator(
    tabsScreenConfig
,{
    tabBarOptions:{
        activeTintColor: Colors.accentColor,
    }
})

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
},{
    defaultNavigationOptions: defaultStackNavOptions
})

const mainNavigator = createDrawerNavigator({
    MealsFavs: { screen: MealsFavTabNavigator, navigationOptions:{
      drawerLabel: 'Meals'  
    }},
    Filters: FiltersNavigator
},{
    contentOptions:{
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(mainNavigator);