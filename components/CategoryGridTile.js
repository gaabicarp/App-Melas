import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={Styles.gridItem}>
            <TouchableCmp onPress={props.onSelect} style={{ flex: 1 }}>
                <View style={{ ...Styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={Styles.title}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 5,
    },
    title: {
        fontSize: 22,
        textAlign: 'right'
    }
})

export default CategoryGridTile