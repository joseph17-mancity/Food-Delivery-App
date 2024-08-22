import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext';

const ThemedButton = ({ title, onPress }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonColor }]} onPress={onPress}>
            <Text style={[styles.text, { color: theme.textColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ThemedButton;
