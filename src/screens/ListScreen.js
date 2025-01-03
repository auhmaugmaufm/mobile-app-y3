import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert, Modal } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SwipeListView } from "react-native-swipe-list-view";

const ListScreen = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [value, setValue] = useState('')

    const [history, setHistory] = useState([
        { id: '1', name: 'Mootom', status: 'Mobile', time: '9:45 AM' },
        { id: '2', name: 'Mooyang', status: 'Phone', time: '8:12 AM' },
        { id: '3', name: 'Erebus', status: 'Phone', time: '7:11 AM' },
        { id: '4', name: 'Charmer Charm', status: 'Phone', time: 'Yesterday' },
        { id: '5', name: 'Mootun', status: 'Mobile', time: 'Sunday' },
        { id: '6', name: 'Moodeng', status: 'Phone', time: 'Saturday' },
        { id: '7', name: 'Moowan', status: 'Phone', time: 'Saturday' },
        { id: '8', name: 'Mootod', status: 'Phone', time: 'Friday' },
        { id: '9', name: 'Moomanow', status: 'Phone', time: 'Friday' },
        { id: '10', name: 'Mookrob', status: 'Phone', time: 'Friday' },
        { id: '11', name: 'Mooyok', status: 'Phone', time: 'Friday' },
        { id: '12', name: 'Mooping', status: 'Phone', time: 'Friday' },
    ])

    const deleteItem = (id) => {
        const newHistory = history.filter((item) => item.id != id)
        setHistory(newHistory);
    }

    return (
        <View style={styles.ViewStyle}>
            <Text style={[styles.TextStyle, { fontWeight: 'bold', fontSize: 27, marginBottom: 18, marginTop: 10 }]}>Recents</Text>
            <Modal transparent={true} animationType="fade" visible={isVisible} onRequestClose={() => { setIsVisible(false) /* ปิด Modal เมื่อกดปุ่ม */ }}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>Calling...</Text>
                        <Image
                            source={require('../img/jennie.jpg')}
                            style={styles.imageCall}
                        />
                        <Text style={styles.msg}>{value.name}</Text>
                        <TouchableOpacity
                            style={styles.okButton}
                            onPress={() => {
                                setIsVisible(false);
                            }}
                        >
                            <View style={styles.iconWithText}>
                                <Icon name="call-end" size={35} color="red" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            < SwipeListView
                keyExtractor={(item) => item.id}
                data={history}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            setValue(item)
                            setIsVisible(true)
                        }}>
                        <View style={styles.RecordView}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('../img/jennie.jpg')}
                                    style={styles.image}
                                />
                                <View style={{ padding: 10, flex: 1 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Text style={[styles.TextStyle, { fontWeight: 'bold', fontSize: 21 }]}>{item.name}</Text>
                                        <Text style={[styles.TextStyle, { fontSize: 17 }]}>{item.time}</Text>
                                    </View>
                                    <Text style={{ fontSize: 15, color: 'grey' }}>{item.status}</Text>
                                </View>
                            </View>
                        </View>

                    </TouchableOpacity>
                )}
                renderHiddenItem={({ item }) => (
                    <TouchableOpacity style={styles.actionButton} onPress={() => deleteItem(item.id)}>
                        <Text style={styles.actionText}>Delete</Text>
                    </TouchableOpacity>
                )}
                rightOpenValue={-100} // ความกว้างที่เลื่อนเปิด ห้ะ
                disableRightSwipe={true} // สไลด์ขวาไม่ได้
                onSwipeValueChange={(swipeData) => {
                    const { key, value } = swipeData;
                    value <= -250 ? deleteItem(key) : null // เลื่อนเกิน 250 หรือ ครึ่ง จะลบรายการเลย
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    ViewStyle: {
        backgroundColor: 'black',
        flex: 1,
    },
    RecordView: {
        borderWidth: 1,
        backgroundColor: 'black',
        borderBottomColor: 'grey',
    },
    TextStyle: {
        color: 'white',
    },
    image: {
        width: 50,
        height: 50,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 75,
    },
    imageCall: {
        width: 160,
        height: 160,
        margin: 10,
        borderRadius: 80,
        borderWidth: 4,
        borderColor: 'green'
    },
    modalOverlay: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
    },
    modalContainer: {
        width: 350,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 28,
        alignItems: "center",
        elevation: 5,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 10,
    },
    msg: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 20,
    },
    listItem: {
        backgroundColor: '#fff',
        padding: 20,
        shadowColor: 'blue',
        textShadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, // ความโปร่ง
        elevation: 3,
    },
    listItemText: {
        fontSize: 18,

    },
    actionButton: {
        backgroundColor: '#ff5252',
        justifyContent: 'center',
        alignItems: 'flex-end',
        height: '100%',
        paddingHorizontal: 20,
    },
    actionText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'

    }
});

export default ListScreen; 