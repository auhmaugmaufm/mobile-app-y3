import React from "react"
import { View, Text, StyleSheet } from "react-native"

// function HomeScreen() {} 
const HomeScreen = () => {
    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.TextStyle}>This is Home Screen!!!</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextStyle: {
        fontSize: 30,
    }
});

export default HomeScreen;