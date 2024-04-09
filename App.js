import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import Home from './src/Home';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
      }}>

        <Text style={{
          fontSize: 20,
          color: "blue"
        }}>Demo React Native Components</Text>
      </View>
      <Home />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight + 10,
    backgroundColor: '#fff',
    // alignItems: 'center',
    paddingHorizontal: 10,
    // justifyContent: 'center',
  },
});
