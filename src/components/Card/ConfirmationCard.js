import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Card } from './Card';

const checkImage = require('../../../assets/check.png');
const errorImage = require('../../../assets/error.png');

export const ConfirmationCard = ({ title, error }) => {

  return (<Card style={styles.container}>
    <Text>
      {title || 'El título por defecto'}
    </Text>
    <Image
      style={styles.image}
      source={error ? errorImage : checkImage}
      />
  </Card>);
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
});