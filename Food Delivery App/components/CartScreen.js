import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { CartContext } from './CartContext';
import { ThemeContext } from './ThemeContext';

const CartScreen = ({ navigation }) => {
    const { cartItems, updateQuantity, removeItem, clearCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={[styles.itemName, { color: theme.textColor }]}>{item.name}</Text>
                        <Text style={[styles.itemQuantity, { color: theme.textColor }]}>Qty: {item.quantity}</Text>
                        <Text style={[styles.itemPrice, { color: theme.textColor }]}>Price: ${item.price}</Text>
                        <Button title="+" onPress={() => updateQuantity(item.id, item.quantity + 1)} />
                        <Button title="-" onPress={() => updateQuantity(item.id, item.quantity - 1)} />
                        <Button title="Remove" onPress={() => removeItem(item.id)} />
                    </View>
                )}
            />
            <Text style={[styles.totalCost, { color: theme.textColor }]}>Total Cost: ${totalCost}</Text>
            <Button title="Proceed to Checkout" onPress={() => {
                clearCart();
                navigation.navigate('HomeScreen'); // Navigate to HomeScreen after checkout
            }} />
            <Button title="Back" onPress={() => navigation.goBack()} />  {/* Back Button */}
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
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemName: {
        fontSize: 18,
    },
    itemQuantity: {
        fontSize: 16,
    },
    itemPrice: {
        fontSize: 16,
    },
    totalCost: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default CartScreen;
