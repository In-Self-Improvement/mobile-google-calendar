import React from 'react';
import {StyleSheet, View} from 'react-native';
import Timer from '~/components/Timer';

interface Props {}

const HomeScreen: React.FC = ({}: Props) => {
  const styles = createStyles();
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  );
};

export default HomeScreen;

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    time: {
      fontWeight: 'bold',
      fontSize: 50,
    },
  });
