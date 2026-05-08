import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductDetails = ({ route }) => {
    const { product } = route.params;

    const addToFavorites = async () => {
        try {
            const savedFavs = await AsyncStorage.getItem('favorites');
            let favsArray = savedFavs ? JSON.parse(savedFavs) : [];

            if (!favsArray.find(item => item.id === product.id)) {
                favsArray.push(product);
                await AsyncStorage.setItem('favorites', JSON.stringify(favsArray));
                alert('Added to Favorites!');
            } else {
                alert('Already in Favorites');
            }
        } catch (e) { console.error(e); }
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: product.image_link }} style={styles.image} />
            <View style={styles.info}>
                <Text variant="headlineMedium">{product.name}</Text>
                <Text variant="titleMedium" style={styles.price}>{product.price} $</Text>
                <Text style={styles.desc}>{product.description}</Text>
                <Button mode="contained" onPress={addToFavorites} style={styles.btn}>
                    Add to Favorites
                </Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    image: { width: '100%', height: 300 },
    info: { padding: 20 },
    price: { color: 'green', marginVertical: 10 },
    desc: { color: '#666', lineHeight: 20 },
    btn: { marginTop: 20 }
});

export default ProductDetails;