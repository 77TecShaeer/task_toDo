

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './EditTask.styles';
import { FormEditTask } from './components/FormEditPost/FormEditTask';
import { HomeStackParams } from 'src/navigations/navigators/HomeNavigator';

export type EditTaskDetailsScreenParams = RouteProp<HomeStackParams, 'EditTask'>;


export const EditTask: FC = () => {

    const {
        params: { task },
    } = useRoute<EditTaskDetailsScreenParams>();


    const navigation = useNavigation();
    useEffect(() => {
        console.log("task:", task);
        navigation.setOptions({ headerRight: null })
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <FormEditTask {...task} />
            </ScrollView>
        </View>
    )
}
