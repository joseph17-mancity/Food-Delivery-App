import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ThemeContext } from './ThemeContext';
import { FormDataContext } from './FormContext'

const ProfileScreen = ({ navigation }) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { formData } = useContext(FormDataContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={styles.card}>
                <Text style={[styles.title, { color: theme.textColor }]}>Personal Details</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Name: {formData.name}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Email: {formData.email}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Phone: {formData.phone}</Text>
            </View>
            <View style={styles.card}>
                <Text style={[styles.title, { color: theme.textColor }]}>Address Details</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Address: {formData.address}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>City: {formData.city}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>State: {formData.state}</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Zip Code: {formData.zipCode}</Text>
            </View>
            <View style={styles.card}>
                <Text style={[styles.title, { color: theme.textColor }]}>Payment Details</Text>
                <Text style={[styles.text, { color: theme.textColor }]}>Credit Card: {formData.creditCard}</Text>
            </View>
            <Button title="Change Theme" onPress={() => setTheme(prevTheme => ({
                ...prevTheme,
                backgroundColor: prevTheme.backgroundColor === 'white' ? 'black' : 'white',
                textColor: prevTheme.textColor === 'black' ? 'white' : 'black',
            }))} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        marginBottom: 20,
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
    },
});

export default ProfileScreen;
