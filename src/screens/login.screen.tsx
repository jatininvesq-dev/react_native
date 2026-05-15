import React, { Component, useEffect, useState } from 'react';
import {
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { loginPrint } from './login';
import { styles } from './style';
import { loginValidation } from './login';
import { RootStackParamList } from '../navigation/RootNavigator';


type LoginNavProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigation = useNavigation<LoginNavProp>();

  useEffect(() => {
    console.log('[Login] mounted');
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingVertical: 20,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { flex: 0 }]}>
          <Image
            source={require('../../assets/animations/login_animation.gif')}
            style={{ width: 260, height: 260 }}
          />
          <View style={styles.rowConatiner}>
            <Text style={styles.title}>Login To Inves</Text>
            <Text style={styles.titleQ}>Q</Text>
          </View>

          <Text style={styles.loginTitle}>Welcome back 👋</Text>
          <Text style={styles.description}>
            Hello again, you've been missed!
          </Text>

          <TextInput
            placeholder="Enter Email"
            value={email}
            style={styles.input}
            onChangeText={setEmail}
            keyboardType="email-address"
            
            returnKeyType='next'
            onSubmitEditing={() => setPassword(password)}
            autoCapitalize="none"
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="Enter Password"
              value={password}
              style={styles.passwordInput}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setIsPasswordVisible(prev => !prev)}
              accessibilityRole="button"
              accessibilityLabel={
                isPasswordVisible ? 'Hide password' : 'Show password'
              }
            >
              <Image
                source={isPasswordVisible ? require('../../assets/images/eye.png') : require('../../assets/images/hide.png')}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
          {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
          {/* Forgot Password → navigates to ForgotPasswordScreen */}


          <View style={styles.rowContainer}>
            <View style={styles.subRowCon}>
            {/* <BouncyCheckbox size={20} >

              </BouncyCheckbox>
               */}
               <View style={styles.checkBox}></View>
              <Text style={styles.asOwner}>Login as Owner</Text>
            </View>
          <TouchableOpacity style={styles.touchForgotText}

            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          >
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>

          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={
              // () => 
              // navigation.navigate('Dashboard')  
              // // loginPrint(email, password)
              () => {
                const result = loginValidation(email, password);
                if (result.isValid) {
                  setEmailError('');
                  setPasswordError('');
                  navigation.navigate('Dashboard');
                } else {
                  setEmailError(result.emailError);
                  setPasswordError(result.passwordError);
                }
              }
            }
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}