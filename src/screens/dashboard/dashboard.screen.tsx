import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppbarView from '../components/appbar.view';
import { styles } from './dashboard_style';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
      <AppbarView />
      <View style={styles.content}>
        <Text style={styles.subTitle}> 👋 Welcome back</Text>
        <Text style={styles.title}>Sakil InvesQ</Text>
      </View>
    </SafeAreaView>
  );
}
