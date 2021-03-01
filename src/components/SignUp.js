import React, { useState } from 'react';


import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    Dimensions
} from 'react-native';
import { color } from 'react-native-reanimated';
import { Picker } from '@react-native-picker/picker';
import LoginUser from '../configs/firebase'
import registerUser from '../configs/firebase'
import firebase from 'firebase'






function SignUp(props) {
    const [loginOption, setloginOption] = useState('')
    const [email, Setemail] = useState('')
    const [password, SetPassword] = useState('')

    const onRegister = async function () {

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password).then(
                Alert.alert('SignUp Successfull')

            ).then(
                props.navigation.navigate('Login')
            )
        }
        catch (error) {
            Alert.alert(error.message)
        }






    }

    const onLogin = async function () {
        // if (loginOption == 'Admin') {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then(
                Alert.alert('correct')



            ).then(
               props.navigation.navigate(loginOption)

            )
                

            





        }
        catch (error) {
            Alert.alert('wrong')

        }

    }
    // else if (loginOption == 'Company') {
    //     try {
    //         await firebase.auth().signInWithEmailAndPassword(email, password).then(
    //             Alert.alert('correct')



    //         ).then(
    //             props.navigation.navigate('Student')

    //         )





    //     }
    //     catch (error) {
    //         Alert.alert(error.message)

    //     }

    // }
    // else if (loginOption == 'Student') {
    //     try {
    //         await firebase.auth().signInWithEmailAndPassword(email, password).then(
    //             Alert.alert('correct')



    //         ).then(
    //             props.navigation.navigate('Company')

    //         )





    //     }
    //     catch (error) {
    //         Alert.alert(error.message)

    //     }

    // }
    // else{
    //     Alert.alert('Select An Option')
    // }
    // }








    return (
        <View style={styles.container} >
            {/* <Text> Home  </Text> */}



            {/* <View style={styles.container}>
            <Image size={50} source={{ uri: 'https://img.freepik.com/free-photo/stethoscope-blue-colored-pills-red-heart-text-thank-you-white_99432-3080.jpg?size=626&ext=jpg' }} style={{ width: 150, height: 150 }} />

            </View>  */}



            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20, marginBottom: 40, color: '#17A2B8' }}>Sign Up </Text>
            <View style={styles.inputContainer}>

                {/* <Image style={styles.inputIcon} source={{ uri: 'https://www.google.com/search?q=email+icon&sxsrf=ALeKk00M4btknP0N-_5rsCwAe25DXOG5Hg:1614503125753&tbm=isch&source=iu&ictx=1&fir=QAKYLokT_TetCM%252CxAk223SSBo2BzM%252C_&vet=1&usg=AI4_-kSpnxVFKorOXgKFvIbjNXOihnvVTA&sa=X&ved=2ahUKEwic-LHqnIzvAhUdRhUIHVVbDxUQ9QF6BAgFEAE&cshid=1614503139928611#imgrc=QAKYLokT_TetCM' }} /> */}
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => Setemail(email)} />
            </View>

            <View style={styles.inputContainer}>
                {/* <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} /> */}
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => SetPassword(password)} />
            </View>
             
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
                <Text style={styles.loginText} onPress={onRegister}>SignUp</Text>
            </TouchableHighlight>
            {/* <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
                <Text style={styles.loginText} onPress={onRegister}>Sign Up</Text>
            </TouchableHighlight> */}
        </View>



    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#343A40',


    },
    container2: {
        // flex: 1,
        // justifyContent: 'space-between',
        // alignItems: 'stretch',
        // backgroundColor: 'white',
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').height * 0.2,

    },
    container4: {
        flex: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height * 0.4,

        // backgroundColor: 'red',
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderBottomWidth: 1,
        width: '90%',
        height: 55,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    inputContainer2: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderBottomWidth: 1,
        width: 330,
        height: 50,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    inputs: {
        height: 45,
        marginLeft: 10,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 15,
        height: 20,
        marginLeft: 15,
        justifyContent: 'center',

    },
    buttonContainer: {



        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 20,
        width: 170,
        borderRadius: 12,
        marginTop: 20
    },
    loginButton: {

        backgroundColor: "#17A2B8",

    },
    loginText: {
        color: 'white',
    }
});

export default SignUp;


