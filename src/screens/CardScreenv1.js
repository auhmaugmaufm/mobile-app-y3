{/*
    - ไม่ได้เรียกใช้ในหน้า HomeScreen    
    - Card Style จะประหลาด เพราะ components/Card เป็นเวอร์ชั่นที่มีรูป (Hero)
*/}

import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import Card from '../components/Card'
import CustomButton from "../components/CustomButton";
import Icon from 'react-native-vector-icons/MaterialIcons'

const CardScreenv1 = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [cards, setCards] = useState([]);

    const addCard = () => {
        if(!title.trim()||!content.trim()) {
            alert('กรุณากรอกค่า Title และ Content')
            return;
        }
        const newCard = { id: Date.now().toString(), title, content }
        setCards((preCards) => [newCard, ...preCards]) // เอา Array ใหม่ไปต่อ ตามด้วยของเดิม
        setTitle('')
        setContent('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>ทดสอบการส้รางการ์ด</Text>
            <TextInput
                style={styles.input}
                placeholder="ใส่หัวข้อ..."
                value={title}
                onChangeText={setTitle} />
            <TextInput
                style={styles.input}
                placeholder="ใส่เนื้อหา..."
                value={content}
                onChangeText={setContent}
                multiline={true}
                numberOfLines={5} />
            <CustomButton
                title='เพิ่มการ์ด'
                backgroundColor='pink'
                onPress={addCard} />
            <FlatList
                data={cards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return <Card title={item.title} content={item.content} />
                }}
                contentContainerStyle={styles.cardList}
            />
            {/* <Card title='Card #4' content='This is the card number Four.' /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
    },
    cardList : {

    }
})

export default CardScreenv1;