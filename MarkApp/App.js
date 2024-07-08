import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import CheckoutScreen from './screens/CheckoutScreen';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CartProvider } from './context/CartContext';

//const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Drawer Navigation
//const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <HomeStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </CartProvider>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  )
}

// const HomeStack = () => {
//   return (
//     <Drawer.Navigator initialRouteName='Home'>
//       <Drawer.Screen
//         name="Home"
//         component={HomeScreen}
//       />
      
//     </Drawer.Navigator>
//   )
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});