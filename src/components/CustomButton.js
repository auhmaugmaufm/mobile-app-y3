import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CustomButtom = ({ title, onPress, backgroundColor }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        paadding: 10,
        alignItems: 'center',
        justifyContent: 'center' ,
        borderRadius: 5,
        height: 50

    },
    text: {
        color: 'white',
        fontSize: 18,
    }
});

export default CustomButtom;