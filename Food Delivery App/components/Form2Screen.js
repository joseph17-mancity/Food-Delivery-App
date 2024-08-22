// src/screens/Form2Screen.js
import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from './FormContext';

const Form2Screen = ({ navigation }) => {
    const { formData, updateAddressDetails } = useContext(FormContext);
    const [address, setAddress] = useState(formData.addressDetails.address);
    const [city, setCity] = useState(formData.addressDetails.city);
    const [state, setState] = useState(formData.addressDetails.state);
    const [zipCode, setZipCode] = useState(formData.addressDetails.zipCode);

    const handleNext = () => {
        updateAddressDetails({ address, city, state, zipCode });
        navigation.navigate('Form3Screen');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
            />
            <TextInput
                style={styles.input}
                placeholder="City"
                value={city}
                onChangeText={setCity}
            />
            <TextInput
                style={styles.input}
                placeholder="State"
                value={state}
                onChangeText={setState}
            />
            <TextInput
                style={styles.input}
                placeholder="Zip Code"
                value={zipCode}
                onChangeText={setZipCode}
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

export default Form2Screen;
