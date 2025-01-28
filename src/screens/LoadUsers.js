import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoadUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Loading Data ...')

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/') // มีแววทำงานช้า
                const data = await response.json() // จริง ๆ เป็น json อยู่แล้ว (คำสั่งนี้จะทำให้เป็น Object???)
                setUsers(data)
                // console.log('Users: ', data)    
            } catch {
                console.log('Error: ', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [])

    return (
        <View style={styles.ViewStyle}>

            {loading ? (
                <View>
                    <Text style={[styles.text]}>Load Users ... </Text>
                    <ActivityIndicator size='large' color='#0000ff' />
                </View>
            ) :
                <FlatList
                    data={users}
                    keyExtractor={(item) => item.id} // ใช้ id แทน index  หรือใช้ id.toString() ก็ได้ แต่ js ไม่มีปัญหาเรื่อง type    
                    renderItem={({ item }) => {
                        return <Text style={styles.text}>{item.name} [{item.email}]</Text>
                    }}
                />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    ViewStyle: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 8,
    }
})


export default LoadUsers;