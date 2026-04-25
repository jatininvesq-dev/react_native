import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginPrint } from './login';
import { styles } from './style';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('[Login] mounted');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        style={styles.input}
        onChangeText={text => {
          // console.log('Email:', text);
          setEmail(text);
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        style={styles.input}
        onChangeText={text => {
          // console.log('Password:', text);
          setPassword(text);
        }}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // console.log('Button pressed');
          loginPrint(email, password); // ✅ call properly
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
