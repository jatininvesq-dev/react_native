import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Login from '../../screens/login.screen';
import Forgotpass from '../../screens/forgot_password/forgotpass.screen';

export type RootStackParamList = {
  Login: undefined;
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={Forgotpass}
        options={{ title: 'Forgot Password', headerShown: true }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
