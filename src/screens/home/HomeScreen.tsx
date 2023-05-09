import React, { FC, useCallback } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import AppTaskCard from '../../components/AppTaskCard/AppTaskCard';
import { useAppSelector } from '../../hooks/useRedux';
import { StoreType } from '../../redux/store';
import { taskType } from '../../redux/types';
import { styles } from './HomeScreen.styles';
import { EmptyTasks } from './components/EmptyTasks';

const { width } = Dimensions.get('window');

export type HomeScreenParams = {}

export const Home: FC<HomeScreenParams> = () => {

    const { tasks } = useAppSelector((state: StoreType) => ({
        tasks: state.tasks.tasks.filter(task => task.userId === state.auth.currentUderId)
    }));

    const renderEachPost = useCallback(({ item }: { item: taskType }) => (
        <View>
            <AppTaskCard {...item} />
        </View>
    ), []);

    const keyExtractor = useCallback((item: taskType) => item.id + "", []);

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                style={{ alignSelf: 'stretch' }}
                renderItem={renderEachPost}
                keyExtractor={keyExtractor}
                ListEmptyComponent={<EmptyTasks />}
            />
        </View>
    );
};
