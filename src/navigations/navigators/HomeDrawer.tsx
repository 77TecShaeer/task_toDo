import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';
import AppMenuDrawer from '../../components/AppMenuDrawer/AppMenuDrawer';
import { Home } from '../../screens/home/HomeScreen';
import { Profile } from '../../screens/profile/Profile';

export type HomeDrawerParams = {
    Home: NavigatorScreenParams<undefined>;
    Profile: NavigatorScreenParams<undefined>;
};

const Drawer = createDrawerNavigator<HomeDrawerParams>();

const HomeDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <AppMenuDrawer {...props} />}
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default HomeDrawer;
