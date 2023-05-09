import React from 'react';
import {
    TextInputProps as RNTextInputProps,
    TextProps as RNTextProps,
    Text
} from 'react-native';

interface AppTextProps extends RNTextProps {
    bold?: boolean

};

const AppText: React.FC<AppTextProps> = (
    props
        : AppTextProps) => {


    return (
        <Text {...props} style={[props.style, { fontWeight: props.bold ? 'bold' : 'normal' }]}>
            {props.children}
        </Text>
    );
};

export default AppText;
