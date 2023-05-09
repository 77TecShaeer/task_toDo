

import React, { FC } from 'react';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormTaskValues } from 'src/type';
import AppButton from '../../../../components/AppButton/AppButton';
import AppTextArea from '../../../../components/AppTextArea/AppTextArea';
import useAddTask from '../../../../hooks/useAddTask';
import { styles } from './FormEditTask.styles';
import { schema } from './ValidationFormEditTask';
import { taskType } from '../../../../redux/types';
import { useDispatch } from 'react-redux';
import { editTask } from '../../../../redux/actions/tasksAction'
import { useNavigation } from '@react-navigation/native';


export const FormEditTask: React.FC<taskType> = (props: taskType) => {
    const { title, description, id } = props
    const { ...methods } = useForm<FormTaskValues>({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
            title: title,
            body: description
        }
    });
    const dispatch = useDispatch();
    const navigation = useNavigation();


    const onSubmit: SubmitHandler<FormTaskValues> = (data: FormTaskValues) => {
        editTask({ ...props, title: data.title, description: data.body }, dispatch);
        navigation.goBack();
    };

    const onError: SubmitErrorHandler<FormTaskValues> = (errors, e) => {
        return console.log(errors)
    };

    return (
        <View style={styles.container}>
            <FormProvider {...methods} >
                <AppTextArea name="title" placeholder='Title' error={methods.formState.errors.title?.message} label="Title" />
                <AppTextArea name="body" placeholder='Description' error={methods.formState.errors.body?.message} label="Description" />
            </FormProvider>
            <AppButton type="primary" title={"Save"} onPress={methods.handleSubmit(onSubmit, onError)} />

        </View>
    )
}
