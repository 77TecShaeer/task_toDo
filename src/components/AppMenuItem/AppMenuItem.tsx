import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import {
    GestureResponderEvent,
    TouchableOpacity,
    View
} from 'react-native';
import Spinner from 'react-native-spinkit';
import Icon from 'react-native-vector-icons/AntDesign';
import { AppColors } from '../../utils/AppColors';
import AppText from '../AppText/AppText';


export type AppMenuItemProps = {
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined;
    title?: string;
    isLoading?: boolean;
    colorTitle?: string
};

const AppMenuItem = ({
    onPress,
    title,
    isLoading, colorTitle
}: AppMenuItemProps) => {
    const isFocuses = useIsFocused();


    return (
        <TouchableOpacity
            disabled={!isFocuses || isLoading}
            onPress={onPress}
            style={{ marginVertical: 16, borderRadius: 4, padding: 8, alignSelf: 'stretch', }}>
            {isLoading ? (
                <Spinner color={AppColors.primary} type='Pulse' />
            ) : <View style={{ alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'space-around' }}>
                {!!title && (
                    <AppText style={{ color: colorTitle ?? AppColors.primary }}>
                        {title}
                    </AppText>
                )}
                <Icon name={colorTitle ? "logout" : "right"} size={25} color={colorTitle ?? AppColors.black} />
            </View>
            }
        </TouchableOpacity>
    );
};

export default React.memo(AppMenuItem);
