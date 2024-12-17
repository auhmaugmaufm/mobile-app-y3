import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";


const StateScreen = () => {
    const [value, setValue] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{value}</Text>
            <View style={styles.button}>
                <Button
                    title="Increase"
                    color="green"
                    onPress={() => {
                        // value++
                        setValue(value + 1)
                        console.log('value : ' + value)
                    }}
                />
                <Button
                    title="Decrease"
                    color="red"
                    onPress={() => {
                        setValue(value - 1)
                        console.log('value ; ' + value)
                    }} />

                <Button
                    title="Reset"
                    color="grey"
                    onPress={() => {
                        setValue(0)
                        console.log('value ; ' + value)
                    }} />
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