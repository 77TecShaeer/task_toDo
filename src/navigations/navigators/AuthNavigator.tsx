import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Login, LoginScreenParams } from '../../screens/login/LoginScreen';
import { AuthNavigationHeader } from '../screenOptions/NavigationHeader';

export type AuthNavigationProps = NativeStackNavigationProp<AuthStackParams>;

export type AuthStackParams = {
    Login: NavigatorScreenParams<LoginScreenParams>;

};

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthNavigator = () => {

    return (
        <AuthStack.Navigator screenOptions={AuthNavigationHeader} >
            <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
