

import { useNavigation } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './AddTask.styles';
import { FormAddTask } from './components/FormEditPost/FormAddTask';

export const AddTask: FC = () => {

    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({ headerRight: null })
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <FormAddTask />
            </ScrollView>
        </View>
    )
}
