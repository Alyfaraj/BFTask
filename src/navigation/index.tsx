import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, PostDetails } from '../screens';
import { MainStackPramsList } from './types';



const Stack = createStackNavigator<MainStackPramsList>();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen component={Home} name='Home' />
                <Stack.Screen component={PostDetails} name='PostDetails' />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;