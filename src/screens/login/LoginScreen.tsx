

import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './LoginScreen.styles';
import { FormLogin } from './components/LoginForm/FormLogin';

export type LoginScreenParams = {
}

export const Login: FC<LoginScreenParams> = () => {


    return (
        <ScrollView contentContainerStyle={styles.contentScroll}>
            <View style={styles.container}>
                <Text style={{ fontSize: 80, color: 'black' }}>To Do</Text>
                <Text>TASKS</Text>
                <FormLogin />
            </View>
        </ScrollView>

    )
}
