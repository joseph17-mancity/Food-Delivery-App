// src/screens/Form1Screen.js
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from './FormContext';

const Form1Screen = ({ navigation }) => {
    const { formData, updateUserDetails } = useContext(FormContext);
    const [name, setName] = useState(formData.userDetails.name);
    const [email, setEmail] = useState(formData.userDetails.email);
    const [phoneNumber, setPhoneNumber] = useState(formData.userDetails.phoneNumber);

    const handleNext = () => {
        updateUserDetails({ name, email, phoneNumber });
        navigation.navigate('Form2Screen');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />
            <Button title="Next" onPress={handleNext} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
});

export default Form1Screen;
