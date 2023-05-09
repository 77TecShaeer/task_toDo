import React from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  View
} from 'react-native';
import { styles } from './AppInput.styles';
interface AppImageProps extends RNTextInputProps, UseControllerProps {
  label: string
  defaultValue?: string,
  error?: string,
};

const AppInput: React.FC<AppImageProps> = (
  props
    : AppImageProps) => {
  let {
    name,
    label,
    error,
    rules,
    defaultValue,
  } = props;
  const { field } = useController({ name, rules, defaultValue });

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        {...props} style={styles.input}>
      </RNTextInput>

      {error && <Text style={styles.error}>{error}</Text>}

    </View>
  );
};

export default AppInput;
