

import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from '../../hooks/useRedux';
import { styles } from './Profile.styles';
import { StoreType } from '../../redux/store';


export const Profile: FC = () => {

    const { user } = useAppSelector((state: StoreType) => {
        return {
            user: state.auth.users.filter(user => user.id === state.auth.currentUderId)[0]
        }
    });

    return (
        <View style={styles.container}>
            <Text>{"Welcome to our app"}</Text>
            <Text>{user.email}</Text>
        </View>
    )
}
