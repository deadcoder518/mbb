import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrayerTimes } from './types';
import { getPrayerTimes } from './api';

export default function App() {
  const [data, setData] = useState<PrayerTimes>();

  useEffect(() => {
    getPrayerTimes().then((data) => {
      setData(data);
    }).catch(console.error);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
