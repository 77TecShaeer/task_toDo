import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import {
    GestureResponderEvent,
    StyleProp,
    TouchableOpacity,
    TouchableOpacityProps,
    ViewStyle
} from 'react-native';
import Spinner from 'react-native-spinkit';
import { AppColors } from '../../utils/AppColors';
import AppText from '../AppText/AppText';

export type ButtonType = 'primary' | 'secondary';
export type Background = 'light' | 'dark';

export type AppButtonProps = {
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined;
    children?: React.ReactNode;
    title?: string;
    disabled?: TouchableOpacityProps['disabled'];
    titleStyle?: StyleProp<ViewStyle>;
    type?: ButtonType;
    small?: boolean;
    background?: Background;
    isLoading?: boolean;
};

const AppButton = ({
    onPress,
    disabled = false,
    title,
    type = 'primary',
    isLoading = false,
    children
}: AppButtonProps) => {
    const isFocuses = useIsFocused();


    return (
        <TouchableOpacity
            disabled={!isFocuses || disabled || isLoading}
            onPress={onPress}
            style={{ marginVertical: 16, borderRadius: 4, borderColor: AppColors.primary, borderWidth: 1, padding: 8, alignSelf: 'stretch', alignItems: 'center', alignContent: 'center' }}>
            {isLoading ? (
                <Spinner color={type === 'primary' ? AppColors.primary : AppColors.white} type='Pulse' />
            ) : !title ?
                children
                :
                <>
                    {!!title && (
                        <AppText style={{ color: type === 'primary' ? AppColors.primary : AppColors.white }}>
                            {title}
                        </AppText>
                    )}
                </>
            }
        </TouchableOpacity>
    );
};

export default React.memo(AppButton);
