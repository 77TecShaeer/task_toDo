import React from 'react';
import { UseControllerProps, useController } from 'react-hook-form';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  View
} from 'react-native';
import { styles } from './AppTextArea.styles';
interface AppTextAreaProps extends RNTextInputProps, UseControllerProps {
  label: string
  defaultValue?: string,
  error?: string,
  disableEdit?: boolean
};

const AppTextArea: React.FC<AppTextAreaProps> = (
  props
    : AppTextAreaProps) => {
  let {
    name,
    label,
    error,
    rules,
    defaultValue,
    disableEdit
  } = props;
  const { field } = useController({ name, rules, defaultValue });

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        editable={disableEdit ?? true}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        multiline
        {...props} style={styles.input}>
      </RNTextInput>

      {error && <Text style={styles.error}>{error}</Text>}

    </View>
  );
};

export default AppTextArea;
