import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CounterProvider } from './components/CounterContext';
import Counter from './components/Counter';

export default function App() {
  return (
    <CounterProvider>
        <Counter/>
    </CounterProvider>
    
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
