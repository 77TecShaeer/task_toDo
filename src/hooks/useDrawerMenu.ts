import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

const useDrawerMenu = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation<NavigationProp<Record<string, unknown>>>();

    const logout = () => {
        Alert.alert('Logout', 'Are you sure you want Logout ?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'YES', onPress: () => {
                    dispatch({ type: 'LOG_OUT' });

                    navigation.dispatch(
                        CommonActions.reset({
                            index: 1,
                            routes: [
                                { name: 'AuthNavigator' },
                            ],
                        })
                    );
                }
            },
        ]);
    }

    const onPressItem = (routName: string) => {
        navigation.navigate(routName)
    }

    return {
        onPressItem,
        logout
    };
};

export default useDrawerMenu;
