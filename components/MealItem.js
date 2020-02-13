import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const MealItem = props => {
    return (
        <View style={Styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...Styles.mealRow, ...Styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={Styles.bgimage}>
                            <View style={Styles.titleContainer}>
                                <Text style={Styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...Styles.mealRow, ...Styles.mealDetail }}>
                        <Text>{props.duration}</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordabilty}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const Styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#E3E3E3',
        borderRadius: 10,
        overflow:'hidden',
        marginVertical: 5
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    mealRow: {
        flexDirection: 'row'
    },
    bgimage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems:'center',
        height: '15%'

    }
})

export default MealItem