import { StyleSheet, View } from 'react-native';
import Main from './src/components/Main';

export default function App() {
  return (
    // quer usar um espaco e dentro desse espaco colocar
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    backgroundColor: '#e0e5e5',
  },
});
