import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import { AuthNavigationHeader } from '../screenOptions/NavigationHeader';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
export type RootNavigationProps = NativeStackNavigationProp<RootNavigatorParams>;

export type RootNavigatorParams = {
  HomeNavigator: NavigatorScreenParams<undefined>
  AuthNavigator: NavigatorScreenParams<undefined>
};

export const RootStack = createNativeStackNavigator<RootNavigatorParams>();

export const RootNavigator = () => {
  const { isLoggedIn } = useAuth();
  return (
    <RootStack.Navigator
      screenOptions={AuthNavigationHeader}
      initialRouteName={isLoggedIn ? "HomeNavigator" : "AuthNavigator"}>
      <RootStack.Screen name="HomeNavigator" component={HomeNavigator} />
      <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
