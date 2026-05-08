import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import routers from '../utils/routes';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace(routers.mainDrawer);
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Beauty Glow ✨</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4511e' },
    logo: { fontSize: 32, color: 'white', fontWeight: 'bold' }
});

export default SplashScreen;