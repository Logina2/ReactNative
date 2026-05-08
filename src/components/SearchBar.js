import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const CustomSearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search for makeup..."
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={styles.search}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 10 },
    search: { backgroundColor: '#f0f0f0', borderRadius: 10 }
});

export default CustomSearchBar;