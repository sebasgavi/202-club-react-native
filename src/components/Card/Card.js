import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Card = (props) => {
  return (<View style={{ ...styles.container, ...props.style }}>
    {props.children}
  </View>);
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOpacity: .4,
    shadowOffset: {
      height: 0,
      width: 5,
    },
    shadowRadius: 6,
    elevation: 10,
  },
});
