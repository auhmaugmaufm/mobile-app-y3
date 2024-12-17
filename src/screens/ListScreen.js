import React from "react"
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from "react-native"

const ListScreen = () => {
    // list friend 
    const friends = [
        { name: 'friend 1', age: 10 },
        { name: 'friend 2', age: 14 },
        { name: 'friend 3', age: 16 },
        { name: 'friend 4', age: 10 },
        { name: 'friend 5', age: 15 },
        { name: 'friend 6', age: 17 },
        { name: 'friend 7', age: 10 },
        { name: 'friend 8', age: 12 },
        { name: 'friend 9', age: 13 },
        { name: 'friend 10', age: 15 },

    ];

    const history = [
        { name: 'Mootom', status: 'Mobile', time: '9:45 AM' },
        { name: 'Mooyang', status: 'Phone', time: '8:12 AM' },
        { name: 'Charmer', status: 'Phone', time: '7:11 AM' },
        { name: 'Charmer', status: 'Phone', time: 'Yesterday' },
        { name: 'Mootun', status: 'Mobile', time: 'Sunday' },
        { name: 'Moodeng', status: 'Phone', time: 'Saturday' },
        { name: 'Moowan', status: 'Phone', time: 'Saturday' },
        { name: 'Mootod', status: 'Phone', time: 'Friday' },
        { name: 'Moomanow', status: 'Phone', time: 'Friday' },
        { name: 'Mookrob', status: 'Phone', time: 'Friday' },
        { name: 'Mooyok', status: 'Phone', time: 'Friday' },
        { name: 'Mooping', status: 'Phone', time: 'Friday' },
    ]

    return (
        <View style={styles.ViewStyle}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.TextStyle, { flex: 1, fontSize: 20 }]}>Clear</Text>
                <Text style={[styles.TextStyle, { flex: 0, fontSize: 20 }]}>Done</Text>
            </View>
            <Text style={[{ fontWeight: 'bold', fontSize: 27, paddind: 10, marginBottom: 18, marginTop: 10 }, styles.TextStyle]}>Recents</Text>

            <FlatList
                keyExtractor={(history, index) => index.toString()}
                data={history}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => Alert.alert('Calling',item.name)}>
                            <View style={styles.RecordView}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={require('../img/jennie.jpg')}
                                        style={styles.image}
                                    />
                                    <View style={{ padding: 10 }}>
                                        <View style={{ flexDirection: 'row' }} >
                                            <Text style={[{ fontWeight: 'bold', fontSize: 21, flex: 0.69, }, styles.TextStyle]}>{item.name} </Text>
                                            <Text style={[{ fontSize: 17, flex: 0.20, textAlign: 'center' }, styles.TextStyle]}>{item.time} </Text>
                                        </View>
                                        <Text style={[{ fontSize: 15, color: 'grey' }]}>{item.status} </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View >
    );
}


const styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: 'black',
        flex: 1,
        padding: 10,
    },
    RecordView: {
        borderWidth: 1,
        backgroundColor: 'black',
        borderBottomColor: 'grey'
    },
    TextStyle: {
        color: 'white'
    },
    image: {
        width: 50,
        height: 50,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 75,
    },
});

export default ListScreen;