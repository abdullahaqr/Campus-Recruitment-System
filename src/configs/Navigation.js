import * as React from 'react';
import { View, 
        Text,
        StyleSheet,

 } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import adminLogin from '../components/login'
import company from '../components/Company'
// import  from '../components/companyAdmin'
import companyAdmin from '../components/Admin';
import Student from '../components/Student'
import SignUp from '../components/SignUp'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
// const Drawer = createDrawerNavigator();

function StackNavigator(props) {
    return (
        <Stack.Navigator>

            <Stack.Screen name='Login' component={adminLogin} />
            <Stack.Screen name='Company' component={TabNavigator} />
            <Stack.Screen name='Admin' component={companyAdmin} />
            <Stack.Screen name='Student' component={Student} />
            <Stack.Screen name='SignUp' component={SignUp} />





        </Stack.Navigator>
    );
}
function TabNavigator(props) {
    return (
        <Tab.Navigator style={styles.container}>

            <Tab.Screen style={{flex: 1, alignItems: 'center', backgroundColor: '#343A40',}} name="Company" component={company} />
            <Tab.Screen style={{flex: 1, alignItems: 'center', backgroundColor: '#343A40',}}  name="Student" component={Student} />




        </Tab.Navigator>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#343A40',


    },

})


export default (StackNavigator);
