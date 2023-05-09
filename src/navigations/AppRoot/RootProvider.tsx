import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type RootProviderProps = {
  children: React.ReactNode;
};

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <SafeAreaProvider>
      {children}
      <FlashMessage />
    </SafeAreaProvider>
  );
};

export default RootProvider;
