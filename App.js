import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Image
      source={
      require('./assets/maersk.png')
      }
      style={{width: 200, height: 200, resizeMode: 'contain' }}
    />
    <Button
        title="Contact Info"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
      
  );
}

const Contact = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textHeader}>
          {'\n'}
          Octavian Roman
        </Text>
        <Text style={styles.textRegular}>
            {'\n'}
            Maersk Junior Mobile Developer
            {'\n'}
            {'\n'}
            octavianroman@maersk.com
            {'\n'}
            {'\n'}
            +45 53 33 64 81
          </Text>
    </View>

  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Business Card'}}
        />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{title: 'Contact Info'}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  textRegular: {
    color: '#fff',
  }
});
