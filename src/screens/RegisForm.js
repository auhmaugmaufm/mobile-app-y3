import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import CustomButtom from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = '@card_data'


const RegisForm = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    const [errors, setErrors] = useState({ username: '', email: '', password: '' })

    const handdleChange = (field, value) => {
        switch (field) {
            case 'username':
                setUsername(value)
                setErrors((preErrorss) => ({ ...preErrorss, username: '' }))
                break;
            case 'email':
                setEmail(value)
                setErrors((preErrorss) => ({ ...preErrorss, email: '' }))
                break;
            case 'password':
                setPassword(value)
                setErrors((preErrorss) => ({ ...preErrorss, password: '' }))
                break;
            case 'confirm_password':
                setConfirm_password(value)
                setErrors((preErrorss) => ({ ...preErrorss, confirm_password: '' }))
                break;
            default:
                break;
        }
    }

    const validateField = (field, value) => {
        let error = ''
        if (!value) {
            error = 'This field is required.'
        } else {
            if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
                error = 'Invalid email address'
            } else if (field === 'password' && value.length < 8) {
                error = 'Invalid Password format'
            } else if (field === 'confirm_password' && value !== password) {
                error = 'Password not match.'
            }
        }
        setErrors((preErrors) => ({ ...preErrors, [field]: error }))
        return error
    }


    const checkSubmit = () => {
        const usernameError = validateField('username', username)
        const emailError = validateField('email', email)
        const passwordError = validateField('password', password)
        const confirm_passwordError = validateField('confirm_password', confirm_password)

        if (!usernameError && !emailError && !passwordError && !confirm_passwordError) {
            Alert.alert('Registration result: ', 'SUCCESS', [
                {
                    text: 'OK', 
                    onPress: () => {
                        setUsername('')
                        setEmail('')
                        setPassword('')
                        setConfirm_password('')
                        setErrors({ username: '', email: '', password: '', confirm_password: '' })
                        navigation.navigate("Card")
                    }
                }
            ])
        }
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration Form</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(value) => handdleChange('username', value)}
                onBlur={() => validateField('username', username)}
            // onBlur ---> ถ้าไม่ focus แล้วจะเรียกใช้ validate
            />
            {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={(value) => handdleChange('email', value)}
                onBlur={() => validateField('email', email)}
            />
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(value) => handdleChange('password', value)}
                onBlur={() => validateField('password', password)}
            />
            {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirm_password}
                onChangeText={(value) => handdleChange('confirm_password', value)}
                onBlur={() => validateField('confirm_password', confirm_password)}
            />
            {errors.confirm_password ? <Text style={styles.errorText}>{errors.confirm_password}</Text> : null}


            <CustomButtom
                title='Registration'
                backgroundColor='green'
                onPress={checkSubmit}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    errorText: {
        color: 'red',
        marginBottom: 8,
    }
})

export default RegisForm;