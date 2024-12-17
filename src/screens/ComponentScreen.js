import React from "react";
import { View, Text, StyleSheet, Image, Button, Alert, TouchableOpacity } from "react-native";


const ComponentScreen = () => {
    const name = ["Supitcha", "Aum"];
    const ShowAlert = (message) => {
        Alert.alert('Jennie Said: ', message, [
            { text: 'OK', onPress: () => console.log('Click OK') },
            { text: 'Cancel', onPress: () => console.log('Click Cancel') },
        ]);
    }

    return (
        <View style={styles.ViewStyle}>
            <TouchableOpacity onPress={() => ShowAlert('Come on!!')}>
                <Image
                    source={require('../img/jennie.jpg')}
                    style={styles.image}
                />
            </TouchableOpacity>
            <Text style={styles.TextStyle}>This is Component Screen</Text>
            <Text style={{ fontSize: 20 }}>by {name[0]} OwO </Text>
            <Button title="Say Hi!" color='pink' style={styles.ButtonStyle} onPress={() => ShowAlert('Hello Rubies!')} />
        </View>
    );
};

const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    TextStyle: {
        fontSize: 24,
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 10,
        borderWidth: 6,
        borderColor: "pink",
        borderRadius: 160,
    },
    ButtonStyle: {
        width: 150,
    }
});

export default ComponentScreen
