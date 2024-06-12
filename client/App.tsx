import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { PrayerTimes, PrayerTimesSchema } from './types';
import { getPrayerTimes } from './api';

export default function App() {
  const [data, setData] = useState<PrayerTimes>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getPrayerTimes().then((data) => {
      setData(data);
    }).catch((e) => {
      console.log(e);
      setError(true);
    }).finally(() => {
      setIsLoading(false);
    })
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" />}
      {error && <Text>Error</Text> }
      {data && data.map((day) => (
        <Text key={day.DayOfMonth}>{day.AsrJamaah}</Text>
      ))}
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
