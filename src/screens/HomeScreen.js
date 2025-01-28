import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";

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
                    color='green'
                />
                <CustomButton
                    title='เรียก Card Screen 🚀'
                    onPress={() => navigation.navigate("Card")} 
                    backgroundColor="grey"
                />
                <CustomButton
                    title='ซ้อม useEffect 👻'
                    onPress={() => navigation.navigate("LoadUsers")} 
                    backgroundColor="#333"
                />
                <Card image= 'https://staticg.sportskeeda.com/editor/2023/10/7850b-16983059580829-1920.jpg?w=640' title='jenn.ie' content='                     RB0280456'/>  
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