import React, { useContext } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext';

const ThemedInput = ({ value, onChangeText, placeholder }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <TextInput
            style={[styles.input, { backgroundColor: theme.backgroundColor, color: theme.textColor }]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={theme.textColor}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
});

export default ThemedInput;
