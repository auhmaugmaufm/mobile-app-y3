import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

// function HomeScreen() {} 
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.TextStyle}>List of Screen!</Text>
            <View style={styles.button}>
                <Button
                    title="Go to List Screen"
                    onPress={() => { navigation.navigate("List") }}
                />
                <Button
                    title="Go to Swipe Screen"
                    onPress={() => { navigation.navigate('Swipe') }}
                />
                <Button
                    title="Go to Modal Demo"
                    onPress={() => { navigation.navigate('Modal') }}

                />
            </View>
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
    },
    button: {
        width: 250,
        gap: 5,
    }
});

export default HomeScreen;