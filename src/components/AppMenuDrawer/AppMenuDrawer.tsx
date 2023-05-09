import * as React from 'react';
import { View } from 'react-native';
import useDrawerMenu from '../../hooks/useDrawerMenu';
import { AppColors } from '../../utils/AppColors';
import AppMenuItem from '../AppMenuItem/AppMenuItem';

const AppMenuDrawer = (props: any) => {
    let { onPressItem, logout } = useDrawerMenu();
    return (
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
            <View style={{ alignSelf: 'stretch' }}>
                <AppMenuItem title="Home" onPress={() => onPressItem('Home')} />
                <AppMenuItem title="Profile" onPress={() => onPressItem('Profile')} />
            </View>
            <AppMenuItem onPress={logout} title="Logout" colorTitle={AppColors.error} />
        </View>
    );
};
export default AppMenuDrawer;