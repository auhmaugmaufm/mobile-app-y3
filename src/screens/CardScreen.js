import React, { useState } from "react";
import {
    View, TextInput, FlatList, StyleSheet,
} from "react-native";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";

const CardScreen = () => {

    const [heroes, setHero] =  useState([
        {
            id: "1",
            title: "SUNSPOT",
            content:
                "Sunspot channels solar energy to become a powerhouse of unbelievable strength, helps the X-Men, and runs a multi-billion dollar company.",
            image: "https://cdn.marvel.com/content/1x/306ssp_com_crd_01.jpg",
        },
        {
            id: "2",
            image: "https://cdn.marvel.com/content/1x/348abm_com_crd_01.jpg",
            title: "ABOMINATION",
            content:
                "Savage and full of a blind rage, Abomination is the Hulk’s foremost foe and while able to crush him, he often faces defeat himself.",
        },
        {
            id: "3",
            image: "https://cdn.marvel.com/content/1x/428all_com_crd_01.jpg",
            title: "Aero",
            content:
                "With the power of the wind at her command, Lei Ling is the master of the sky and the protector of Shanghai!",
        },

    ]);

    const [key, setKey] = useState('');
    const [filteredHeroes, setFilteredHeroes] = useState(heroes);
    const searchHero = (text) => {
        setKey(text)
        const h = heroes.filter((hero) =>
            hero.title.toLowerCase().includes(text.toLowerCase())
        )
        setFilteredHeroes(h);
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const addCard = () => {
        if(!title.trim()||!content.trim()||!image.trim()) {
            alert('กรุณากรอกค่า Title และ Content')
            return;
        }
        const newHero = { id: (heroes.length + 1).toString() , title, content, image }
        heroes.push(newHero); // เอา Array ใหม่ไปต่อ ตามด้วยของเดิม
        setTitle('')
        setContent('')
        setImage('')
        
        searchHero(key); // รีเฟรชผลการค้นหาหลังจากเพิ่มการ์ด
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Title ..."
                value={title}
                onChangeText={setTitle} />
            <TextInput
                style={styles.input}
                placeholder="Content ..."
                value={content}
                onChangeText={setContent} />
            <TextInput
                style={styles.input}
                placeholder="Picture Link ..."
                value={image}
                onChangeText={setImage} />
            <CustomButton
                title='เพิ่มการ์ด'
                backgroundColor='pink'
                onPress={addCard} />
            <TextInput
                style={styles.input}
                placeholder="Search by Name"
                value={key}
                onChangeText={searchHero}
            />
            <FlatList
                data={filteredHeroes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <Card
                            image={item.image}
                            title={item.title}
                            content={item.content}
                        />
                    )

                }}
                contentContainerStyle={styles.cardList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    cardList: {
        paddingBottom: 10,
    },
});

export default CardScreen;
