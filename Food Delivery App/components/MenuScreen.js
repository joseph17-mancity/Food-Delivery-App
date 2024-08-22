import React, { useContext } from 'react';
import { View, FlatList, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { CartContext } from './CartContext';
import ThemedButton from '../components/ThemedButton';

const MenuScreen = () => {
    const { addToCart } = useContext(CartContext);
    const menuItems = [
        // Food List Below to Order from: 
        { id: '1', name: 'Strawberry Pie', image: 'https://www.yellowblissroad.com/wp-content/uploads/2020/07/Strawberry-Pie-social.jpg', description: 'Delicious pie orginated in Italy ', price: '$10' },
        
        { id: '2', name: 'Pizza', image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg', description: 'Delicious pizza', price: '$13' },

        { id: '3', name: 'Pizza', image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/10/4/1/FN_chain-restaurant-entrees_Applebees_Bourbon-Street-Chicken-Shrimp_s6x4.jpg.rend.hgtvcom.1280.1280.suffix/1538685780055.jpeg', description:'Nandos Shrimp special meal', price:'$17' },

        { id: '4', name: 'Pizza', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/0b/42/94/my-friend-s-grilled-salmon.jpg?w=600&h=400&s=1', description: 'Delicious pizza', price: '$9' },

        { id: '5', name: 'Pizza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfBE8rEltHZSyNkpV6BF2EM-CdFrYrMwUWQ&s', description: 'Delicious pizza', price: '$12,5' },

        { id: '6', name: 'Pizza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKe-jad37xiQWwvt_HTuXBL-aVbpmZXXxhg&s', description: 'Delicious pizza', price: '$14' },

        { id: '7', name: 'Pizza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUQhhXIPsr2beV0_VXsu6SPgKnnJGYBOGDsw&s', price: '$16,5' },

        { id: '8', name: 'Pizza', image: 'https://lapetiteferme.co.za/wp-content/uploads/2024/06/Buchu-Infused-Pork-Belly-8-LR-scaled.jpg', description: 'Delicious pizza', price: '$19' },

        { id: '9', name: 'Pizza', image: 'https://www.eatout.co.za/wp-content/uploads/2020/11/MG_3953-600x450.jpg', description: 'Delicious pizza', price: '$20' },
        
        { id: '10', name: 'Pizza', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/89/d6/ab/upstairs-by-tom-shepherd.jpg?w=600&h=-1&s=1', description: 'Delicious pizza', price: '$7' }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <ThemedButton style={styles.button} title="Add to Cart" onPress={() => addToCart(item)} />
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'Orange',
        height: 80,
    },
    itemContainer: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    image: {
        width: '100%',
        height: 230,
        borderRadius: 5,
    },
    name: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00ffff'
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007bff',
    },
});

export default MenuScreen;
