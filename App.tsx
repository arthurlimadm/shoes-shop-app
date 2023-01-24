import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Routes from './src/routes';
import {Anton_400Regular, useFonts} from '@expo-google-fonts/anton';
import 'react-native-gesture-handler';

export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular
  })

  if(!fontsLoaded){
    return (<Text>Loading...</Text>)
  }

  return (<>
      <StatusBar style='light' backgroundColor='#000' translucent={true}/>
      <Routes/>
  </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
