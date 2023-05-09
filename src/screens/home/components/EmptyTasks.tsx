

import React, { FC } from 'react';
import { View } from 'react-native';
import AppText from '../../../components/AppText/AppText';
import { styles } from './HomeScreen.styles';



export const EmptyTasks: FC = () => {

    return (
        <View style={styles.container}>
            <AppText>
                No Tasks Found
            </AppText>
        </View>
    )
}
