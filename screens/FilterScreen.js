import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import CustomHeaderButton from '../components/HeaderButtons'
import Colors from '../constants/Colors'
import { useDispatch } from 'react-redux';
import {setFilters} from '../store/actions/meals'

const FilterSwitch = props => {
    return (
        <View style={Styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch thumbColor={Colors.primaryColor} trackColor={{ true: Colors.primaryColor }} value={props.state} onValueChange={props.onChange} />
        </View>
    )
};


const FilterScreen = props => {
    const {navigation} = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setisLactoseFree] = useState(false);
    const [isVegan, setisVegan] = useState(false);
    const [isVegeterian, setisVegeterian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() =>{
        const AppliedFilters={
            GlutenFree: isGlutenFree,
            LactoseFree: isLactoseFree,
            Vegan: isVegan,
            Vegetarian: isVegeterian
        };

        dispatch(setFilters(AppliedFilters))
    }, [isGlutenFree, isLactoseFree, isVegeterian, isVegan, dispatch])

    useEffect(()=>{
        navigation.setParams({save: saveFilters});
    },[saveFilters])
    
    return (
        <View style={Styles.screen}>
            <Text style={Styles.title}>Available Filters / Restrictions </Text>
            <FilterSwitch label='Gluten-Free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch label='Lactose-Free' state={isLactoseFree} onChange={newValue => setisLactoseFree(newValue)} />
            <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setisVegan(newValue)} />
            <FilterSwitch label='Vegetarian' state={isVegeterian} onChange={newValue => setisVegeterian(newValue)} />
        </View>
    );
}

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item name="menu" iconName="ios-menu" onPress={() => {
                    navData.navigation.toggleDrawer();
                }}
                />
            </HeaderButtons>
        ,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item name="save" iconName="ios-save" onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        
    }
}


FilterScreen.navigatorOptions = {
    headerTitle: 'Filter'
}
const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    }
});

export default FilterScreen;