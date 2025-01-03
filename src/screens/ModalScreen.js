import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModalScreen = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.screenText}>This is Modal Screen</Text>
            <TouchableOpacity style={styles.okButton} onPress={() => setIsVisible(true)}>
                <Text style={styles.okButtonText}>Open Modal</Text>
            </TouchableOpacity>
            <Modal transparent={true} animationType="fade" visible={isVisible}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>Welcome Message</Text>
                        <Text style={styles.msg}>ยินดีต้อนรับเข้าสู่โลกแห่งจิตนาการ</Text>
                        <TouchableOpacity
                            style={styles.okButton}
                            onPress={() => {
                                setIsVisible(false);
                                navigation.navigate("List");
                            }}
                        >
                            <View style={styles.iconWithText}>
                                <Icon name="call-end" size={30} color="#4F8EF7" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    screenText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalOverlay: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
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
    okButton: {
        backgroundColor: "#4caf50",
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 5,
    },
    okButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    iconWithText: {
        flexDirection: "row",
        alignItems: "center",
    },
});

export default ModalScreen;
