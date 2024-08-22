import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Image } from 'react-native';
import { CartContext } from './CartContext';
import { ThemeContext } from './ThemeContext';

const HomeScreen = ({ navigation }) => {
    const { addItemToCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    const foodItems = [
        { id: '1', name: 'Burger', description: 'Juicy beef burger', price: 5.99, image: require('../assets/burger-with-melted-cheese.jpeg') },
        { id: '2', name: 'Pizza', description: 'Cheesy pepperoni pizza', price: 8.99, image: require('../assets/Cherry-Delight-Dessert_EXPS_TOHcom23_27515_P2_MD_03_22_4b.jpeg') },
        { id: '3', name: 'Pasta', description: 'Creamy alfredo pasta', price: 7.99, image: require('../assets/Easy-Fresh-Strawberry-Pie.jpg') },
        { id: '4', name: 'Salad', description: 'Fresh garden salad', price: 4.99, image: require('../assets/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg') },
        { id: '5', name: 'Sushi', description: 'Delicious sushi rolls', price: 12.99, image: require('../assets/Easy-Fresh-Strawberry-Pie.jpg') },
    ];

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <FlatList
                data={foodItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={item.image} style={styles.itemImage} />
                        <Text style={[styles.itemName, { color: theme.textColor }]}>{item.name}</Text>
                        <Text style={[styles.itemDescription, { color: theme.textColor }]}>{item.description}</Text>
                        <Text style={[styles.itemPrice, { color: theme.textColor }]}>Price: ${item.price}</Text>
                        <Button title="Add to Cart" onPress={() => addItemToCart(item)} />
                    </View>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('CartScreen')}>
                <Text style={styles.cartButtonText}>Go to Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    itemContainer: {
        padding: 10,
        marginHorizontal: 10,
        width: 250,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        alignItems: 'center', // Center the image and text
    },
    itemImage: {
        width: 200,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 18,
    },
    itemDescription: {
        fontSize: 16,
        marginVertical: 5,
        textAlign: 'center', // Center the text
    },
    itemPrice: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center', // Center the text
    },
    cartButton: {
        padding: 15,
        backgroundColor: '#ff6347',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 5,
    },
    cartButtonText: {
        fontSize: 18,
        color: 'white',
    },
});

export default HomeScreen;
