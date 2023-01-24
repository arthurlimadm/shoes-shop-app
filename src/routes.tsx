import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import type { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined;
    Detail: undefined;
};

import Detail from './pages/detail'
import Home from './pages/home'

const Stack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>   
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}