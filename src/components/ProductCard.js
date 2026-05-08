import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';

const ProductCard = ({ item, onDetails, onFavorite, isFavoritePage = false }) => {
    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: item.image_link }} style={styles.image} />
            <Card.Content>
                <Text variant="titleMedium" numberOfLines={1}>{item.name}</Text>
                <Text variant="bodyMedium" style={styles.price}>{item.price} $</Text>
            </Card.Content>
            <Card.Actions>
                <Button mode="outlined" onPress={() => onDetails(item)}>
                    Details
                </Button>
                <Button
                    mode="contained"
                    onPress={() => onFavorite(item)}
                    buttonColor={isFavoritePage ? '#ff4d4d' : '#f4511e'}
                >
                    {isFavoritePage ? 'Remove' : 'Favorite'}
                </Button>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: { margin: 10, elevation: 3, backgroundColor: '#fff' },
    image: { height: 180 },
    price: { color: 'green', fontWeight: 'bold', marginTop: 5 }
});

export default ProductCard;