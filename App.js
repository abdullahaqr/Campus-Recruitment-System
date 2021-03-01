// import { StatusBar } from 'expo-status-bar';
// // import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import login from './src/components/login'
// // import StackNavigator from './src/configs/Navigation'


// export default function App() {
//   const Stack = createStackNavigator();

//   return (
//     <View >
//       {/* <StatusBar style="auto" /> */}
//       <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.screen name='login' component={login}/>
//       </Stack.Navigator>

//       <Text>Open up App.js to start working on your app!</Text>


//       </NavigationContainer>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from 'react';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/login'
import StackNavigator from './src/configs/Navigation'



const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name="Home" component={Login} />
            </Stack.Navigator> */}
            <StackNavigator />
        </NavigationContainer>
    );
}

