import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import ProductCard from '../components/ProductCard';
import routers from '../utils/routes';

const FavoritesScreen = ({ navigation }) => {
    const [favorites, setFavorites] = useState([]);
    const isFocused = useIsFocused();

    const loadFavorites = async () => {
        try {
            const savedFavs = await AsyncStorage.getItem('favorites');
            if (savedFavs) {
                setFavorites(JSON.parse(savedFavs));
            }
        } catch (e) {
            console.error("Failed to load favorites", e);
        }
    };

    useEffect(() => {
        if (isFocused) {
            loadFavorites();
        }
    }, [isFocused]);

    const removeFromFavorites = async (id) => {
        try {
            const updatedFavs = favorites.filter(item => item.id !== id);
            setFavorites(updatedFavs);
            await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavs));
            alert('Removed from Favorites');
        } catch (e) {
            console.error("Failed to remove favorite", e);
        }
    };

    return (
        <View style={styles.container}>
            {favorites.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text variant="headlineSmall">No Favorites Yet! 💔</Text>
                </View>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ProductCard
                            item={item}
                            isFavoritePage={true}
                            onDetails={(prod) => navigation.navigate(routers.details, { product: prod })}
                            onFavorite={() => removeFromFavorites(item.id)}
                        />
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f8f8' },
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});

export default FavoritesScreen;