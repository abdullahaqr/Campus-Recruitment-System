import React, { useState } from 'react';
// import Modal from 'react-native-modal';



import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
    Alert,
    // Modal,
    TouchableHighlight,
    TextInput
} from 'react-native';


function company(props) {
    // const [modalVisible, setModalVisible] = useState(false);
    const clickHandler = () => {
        //function to handle click on floating Action Button
        alert('Floating Button Clicked');
    };
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (



        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                {/* <Text style={styles.titleStyle}>
        Example of React Native Floating Action Button
      </Text>
      <Text style={styles.textStyle}>
        Click on Action Button to see Alert
      </Text> */}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={toggleModal}
                    style={styles.touchableOpacityStyle}>
                    <Image
                        //We are making FAB using TouchableOpacity with an image
                        //We are using online image here
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
                        }}
                        //You can use you project image Example below
                        //source={require('./images/float-add-icon.png')}
                        style={styles.floatingButtonStyle}
                    />
                </TouchableOpacity>
            </View>
            
















           
        </SafeAreaView>

    );

}
export default company;
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

