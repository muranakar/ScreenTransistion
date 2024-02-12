import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View, Text, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

function HomeTab({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  );
}

function DetailsTab({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: 'lightblue' }]}>
      <Button
        title="Go back to Home"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Details" component={DetailsTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default App;
