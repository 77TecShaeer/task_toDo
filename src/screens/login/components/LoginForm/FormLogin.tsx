

import React, { FC } from 'react';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import AppButton from '../../../../components/AppButton/AppButton';
import AppInput from '../../../../components/AppInput/AppInput';
import useAuth from '../../../../hooks/useAuth';
import { styles } from './FormLogin.styles';
import { schema } from './ValidationFormLogin';

export type FormLoginParams = {
}

export type FormValues = {
    email: string;
    password: string;
};

export const FormLogin: FC<FormLoginParams> = () => {

    const { ...methods } = useForm<FormValues>({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    let { sendLogin, isLoading } = useAuth();

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => sendLogin(data);

    const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
        return console.log(errors)
    };

    return (
        <View style={styles.container}>
            <FormProvider {...methods}>
                <AppInput name="email" placeholder='test@test.com' error={methods.formState.errors.email?.message} label="Email" keyboardType='email-address' />
                <AppInput name="password" placeholder='*******' error={methods.formState.errors.password?.message} label="Password" secureTextEntry />
            </FormProvider>

            <AppButton isLoading={isLoading} type="primary" title="Login" onPress={methods.handleSubmit(onSubmit, onError)} />

        </View>
    )
}
