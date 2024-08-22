// src/screens/Form3Screen.js
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from './FormContext';

const Form3Screen = ({ navigation }) => {
    const { formData, updatePaymentDetails } = useContext(FormContext);
    const [cardNumber, setCardNumber] = useState(formData.paymentDetails.cardNumber);
    const [expirationDate, setExpirationDate] = useState(formData.paymentDetails.expirationDate);
    const [cvv, setCvv] = useState(formData.paymentDetails.cvv);

    const handleSubmit = () => {
        updatePaymentDetails({ cardNumber, expirationDate, cvv });
        // Submit the form data or navigate to another screen
        navigation.navigate('ProfileScreen');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Card Number"
                value={cardNumber}
                onChangeText={setCardNumber}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Expiration Date"
                value={expirationDate}
                onChangeText={setExpirationDate}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="CVV"
                value={cvv}
                onChangeText={setCvv}
                keyboardType="numeric"
                secureTextEntry
            />
            <Button title="Submit" onPress={handleSubmit} />
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

export default Form3Screen;
