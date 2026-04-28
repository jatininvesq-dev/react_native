import React, { useEffect, useState } from 'react';
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
import { RootStackParamList } from '../src/navigation/RootNavigator';
import { loginPrint } from './login';
import { styles } from './style';

type LoginNavProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            source={require('../assets/animations/login_animation.gif')}
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

          <TextInput
            placeholder="Enter Password"
            value={password}
            style={styles.input}
            onChangeText={setPassword}
            inlineImageLeft='../assets/images/eye.png'
            secureTextEntry
          />

          {/* Forgot Password → navigates to ForgotPasswordScreen */}
          <TouchableOpacity style={styles.touchForgotText}
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          >
            <Text style={styles.forgotPass}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => loginPrint(email, password)}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}