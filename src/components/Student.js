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


function Student(props) {
    return(
    <View style={styles.container}>
        <Text style={{color: "#ffffff", }}>Student</Text>
    </View>
    );
    
}









const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#343A40',
        padding: 10,
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        //   marginTop:500
        //backgroundColor:'black'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 100,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 20,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        height: 45,
        width: 50,
        borderBottomColor: 'red',



        marginBottom: 15,
        textAlign: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 10,
        borderRadius: 20,
        flex: 1,
    },
});









export default Student;
