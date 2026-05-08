import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routers from '../utils/routes';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProductDetails from '../screens/ProductDetails';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: '#f4511e' }, 切换TintColor: '#fff' }}>
            <Drawer.Screen name={routers.home} component={HomeScreen} options={{ title: 'Beauty Store' }} />
            <Drawer.Screen name={routers.favorites} component={FavoritesScreen} options={{ title: 'My Favorites' }} />
        </Drawer.Navigator>
    );
}

export default function AppNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routers.splash} component={SplashScreen} />
            <Stack.Screen name={routers.mainDrawer} component={MyDrawer} />
            <Stack.Screen name={routers.details} component={ProductDetails} options={{ headerShown: true, title: 'Details' }} />
        </Stack.Navigator>
    );
}