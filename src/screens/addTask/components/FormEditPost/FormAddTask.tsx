

import React, { FC } from 'react';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { FormTaskValues } from 'src/type';
import AppButton from '../../../../components/AppButton/AppButton';
import AppTextArea from '../../../../components/AppTextArea/AppTextArea';
import useAddTask from '../../../../hooks/useAddTask';
import { styles } from './FormAddTask.styles';
import { schema } from './ValidationFormAddTask';



export const FormAddTask: FC = () => {

    const { ...methods } = useForm<FormTaskValues>({
        mode: "onChange",
        resolver: yupResolver(schema),
    });


    let { addDetailsTask } = useAddTask();
    const onSubmit: SubmitHandler<FormTaskValues> = (data: FormTaskValues) => {
        addDetailsTask(data);
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
