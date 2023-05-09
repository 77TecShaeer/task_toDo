import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useAppDispatch } from '../../hooks/useRedux';
import { HomeStackParams } from '../../navigations/navigators/HomeNavigator';
import { deleteTask } from '../../redux/actions/tasksAction';
import { taskType } from '../../redux/types';
import { AppColors } from '../../utils/AppColors';
import AppButton from '../AppButton/AppButton';
import AppText from '../AppText/AppText';


const AppTaskCard: React.FC<taskType> = (props: taskType) => {

    const { title, description, id } = props;

    const navigation = useNavigation<StackNavigationProp<HomeStackParams>>();
    const dispatch = useAppDispatch();

    const handleDeleteTask = () => {
        Alert.alert('Delete Task', 'Are you sure you want to delete the task?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'YES',
                onPress: () => {
                    deleteTask(id, dispatch);
                },
            },
        ]);
    };

    const handleNavigationDetails = () => {
        navigation.navigate('EditTask',
            {
                task: props
            });
    };


    return (
        <View style={{ marginHorizontal: 16, alignSelf: 'stretch' }}>
            <AppButton >
                <View style={{ alignSelf: 'stretch', flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <AppText bold>{title}</AppText>
                        <AppText>{description}</AppText>
                    </View>
                    <View style={{ justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={handleDeleteTask}>
                            <Icon name="closecircle" size={25} color={AppColors.error} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleNavigationDetails()}>
                            <Icon name="edit" size={25} color={AppColors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </AppButton>
        </View>
    );
};

export default AppTaskCard;
