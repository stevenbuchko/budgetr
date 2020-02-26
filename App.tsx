import 'react-native-gesture-handler';
import * as React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import EditBudgetScreen from './src/screens/EditBudget/EditBudgetScreen';
import { AppLoading } from 'expo';

function ExpensesScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the expenses screen</Text>
    </View>
  )
}

function WalletScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the wallet screen</Text>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the profile screen</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeScreenStack() {
  return (
    <HomeStack.Navigator headerMode='none'>
      <HomeStack.Screen name="HomeDashboard" component={HomeScreen} />
      <HomeStack.Screen name="EditBudget" component={EditBudgetScreen} />
    </HomeStack.Navigator>
  )
}

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async _cacheResourcesAsync() {
    await Font.loadAsync({
      'avenir-next-medium': require('./assets/fonts/AvenirNext-Medium.ttf'),
      'avenir-next-regular': require('./assets/fonts/AvenirNext-Regular.ttf'),
      'avenir-next-light': require('./assets/fonts/AvenirNext-UltraLight.ttf'),
    });
  }
  
  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ fontLoaded: true })}
          onError={console.warn}
        />
      );
    }

    return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'account-balance';
            } else if (route.name === 'Expenses') {
              iconName = 'show-chart';
            } else if (route.name === 'Wallet') {
              iconName = 'account-balance-wallet';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0047CC',
          inactiveTintColor: '#77869E',
          keyboardHidesTabBar: 'true'
        }}
      >
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Expenses" component={ExpensesScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
