import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

// Array for image paths with require
const IMAGES = {
    splash: require('../assets/Splash.jpeg'), // Use require in array
};

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Navigate to the main screen after a delay
        const timer = setTimeout(() => {
            navigation.navigate('HomeScreen');
        }, 3000); // Duration in milliseconds (3 seconds)

        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={IMAGES.splash} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkorange', // Background color of the splash screen
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 20,
    },
});

export default SplashScreen;
