import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from "react-native";

const initialState = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1  }
        case "DECREMENT":
            return { count: state.count - 1  }
        case "RESET":
            return { count: 0 }
        default:
            return state;
    }
}

const StateScreen = () => {
    //const [value, setValue] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState)



    return (
        <View style={styles.container}>
            <Text style={styles.text}>{state.count}</Text>
            <View style={styles.button}>
                <Button
                    title="Increase"
                    color="green"
                    onPress={() => dispatch({ type: "INCREMENT" })}
                />
                <Button
                    title="Decrease"
                    color="red"
                    onPress={() => {
                        {state.count > 0 ? dispatch({ type: "DECREMENT"}) : Alert.alert('Warning', 'ไม่สามารถติบลบได้!!') }
                    }} />

                <Button
                    title="Reset"
                    color="grey"
                    onPress={() => dispatch({ type: "RESET" })} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 250
    },
    button: {
        width: 250,
        gap: 5,
    }
})

export default StateScreen;