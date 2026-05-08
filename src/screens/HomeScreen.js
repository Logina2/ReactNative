import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getProducts } from '../api/makeupApi';
import routers from '../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductCard from '../components/ProductCard';
import CustomSearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getProducts().then(data => {
            setProducts(data);
            setFilteredProducts(data);
        });
    }, []);


    const handleSearch = (text) => {
        setSearchQuery(text);
        const filtered = products.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    // منطق الإضافة للمفضلة باستخدام AsyncStorage
    const addToFavorites = async (product) => {
        try {
            const savedFavs = await AsyncStorage.getItem('favorites');
            let favsArray = savedFavs ? JSON.parse(savedFavs) : [];

            if (!favsArray.find(item => item.id === product.id)) {
                favsArray.push(product);
                await AsyncStorage.setItem('favorites', JSON.stringify(favsArray));
                alert('Added to Favorites! ❤️');
            } else {
                alert('This product is already in your favorites!');
            }
        } catch (e) {
            console.error("Error saving favorite:", e);
        }
    };

    return (
        <View style={styles.container}>
            <CustomSearchBar
                searchQuery={searchQuery}
                setSearchQuery={handleSearch}
            />

            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductCard
                        item={item}
                        onDetails={(prod) => navigation.navigate(routers.details, { product: prod })}
                        onFavorite={() => addToFavorites(item)}
                    />
                )}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8'
    },
    listContent: {
        paddingBottom: 20
    }
});

export default HomeScreen;