import React from 'react';
import { Text, StyleSheet } from 'react-native';

import defaultStyles from '../constants/styles';

export default AppText = ({ children, style, ...props }) => {
  return (
    <Text style={[defaultStyles.text, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({});
