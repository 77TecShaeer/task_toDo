import { DrawerActions, NavigationProp } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { AppColors } from '../../utils/AppColors';
import { SCREENS_PADDING } from '../../utils/ScreenUtils';

export type NavigationHeaderProps = {
  navigation: NavigationProp<Record<string, unknown>>;
};

export const transparentHeader = {
  headerTransparent: true,
  headerStyle: undefined,
};

export type NavigationHeaderReturnValue = NativeStackNavigationOptions & StackNavigationOptions;

export const AuthNavigationHeader = () => {

  return {
    headerShown: false,
  } as NavigationHeaderReturnValue;
};

export const HomeNavigationHeader = ({ navigation }: NavigationHeaderProps) => {

  return {
    headerShown: true,
    headerTintColor: AppColors.black,
    headerTitleAlign: 'center',
    headerStyle: { backgroundColor: AppColors.ultraLightGray },
    headerTitle: '',
    cardOverlayEnabled: true,
    headerTitleStyle: {
    },
    headerLeftContainerStyle: {
      padding: SCREENS_PADDING.horizontal,
    },
    headerRightContainerStyle: {
      padding: SCREENS_PADDING.horizontal,
    },
    headerShadowVisible: false,
    headerLeft: (props) =>
      navigation.canGoBack() && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrowleft" size={25} color={AppColors.black} />
        </TouchableOpacity>
      ) ||
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
        <Icon name="menuunfold" size={25} color={AppColors.black} />
      </TouchableOpacity >
    ,
    headerRight: (props) => <View style={{ flexDirection: 'row' }}>

      <TouchableOpacity style={{ marginHorizontal: 4 }} onPress={() => navigation.navigate('AddTask')}>
        <Icon name="plus" size={25} color={AppColors.black} />
      </TouchableOpacity>
    </View>
    ,
  } as NavigationHeaderReturnValue;
};
