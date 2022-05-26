import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to setting" onPress={() => navigation.navigate('Setting')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function FollowerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Follower Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerStyle: { backgroundColor: 'darkviolet' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }}} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Follower" component={FollowerScreen} />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? 'add' : 'outline';
            } else if (route.name === "Setting") {
              iconName = focused ? 'add' : '"outline';
            } else {
              iconName = focused ? 'add' : 'outline'
            }

            return <Icon name="stepforward" size={30} color="#900" />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray'
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
        <Tab.Screen name="Follower" component={FollowerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
