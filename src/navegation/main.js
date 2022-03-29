import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Main from '../screens/main/index';
import Product from '../screens/product/index';
import Category from '../screens/category/index';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='Product' component={Product} />
            <Stack.Screen name='Category' component={Category} />
        </Stack.Navigator>
    );
}

export default MainNavigator;