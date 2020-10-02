import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Test } from './src/components/Test/Test';
import * as eva from '@eva-design/eva';
import { Card } from './src/components/Card/Card';
import { ConfirmationCard } from './src/components/Card/ConfirmationCard';

export default function App() {
  return (<ApplicationProvider {...eva} theme={eva.light}>
    <View style={styles.container}>

      <Card>
        <Text>hola</Text>
      </Card>

      <ConfirmationCard title="Confirmación" />
      <ConfirmationCard title="Con error" error />
      <ConfirmationCard error />

      <StatusBar style="auto" />
    </View>
  </ApplicationProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});
