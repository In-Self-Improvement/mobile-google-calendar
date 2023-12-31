import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from '~/index';
interface Props {}

const App = ({}: Props) => {
  const styles = createStyles();

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

export default App;

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
