import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { taskType } from '../../redux/types';
import { EditTask } from '../../screens/editTask/EditTask';
import { HomeNavigationHeader } from '../screenOptions/NavigationHeader';
import HomeDrawer from './HomeDrawer';
import { AddTask } from '../../screens/addTask/AddTask';

export type AuthNavigationProps = NativeStackNavigationProp<HomeStackParams>;

export type HomeStackParams = {
    HomeDrawer: NavigatorScreenParams<undefined>;
    AddTask: NavigatorScreenParams<undefined>;
    EditTask: { task: taskType }

};

const AuthStack = createNativeStackNavigator<HomeStackParams>();

const HomeNavigator = () => {

    return (

        <AuthStack.Navigator screenOptions={HomeNavigationHeader}>
            <AuthStack.Screen name="HomeDrawer" component={HomeDrawer} />
            <AuthStack.Screen name="AddTask" component={AddTask} />
            <AuthStack.Screen name="EditTask" component={EditTask} />
        </AuthStack.Navigator>
    );
};

export default HomeNavigator;
