import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import RegisterCP from '../components/RegisterCP'
import LoginCP from '../components/LoginCP'
const LoginScreen = () => {
    const [loginView, setLoginView] = useState('Login')
    return (
        <View style={styles.container}>
            <View style={[styles.cardContainer, { alignItems: 'center',marginBottom:30 }]}>
                <Image
                    style={{ height: 130, width: 130, marginVertical: 5 }}
                    resizeMode='contain'
                    source={require('../../assets/images/heart.png')}
                />
                {/* <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#333', textAlign: 'center' }}>Welcome to MyProject</Text> */}
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={loginView === 'Login' ? styles.btnLoginViewChoose : styles.btnLoginView} onPress={() => { setLoginView('Login') }}>
                        <Text style={loginView == 'Login' ? styles.btnLabelLoginViewChoose : null}>Sign-in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={loginView === 'Register' ? styles.btnLoginViewChoose : styles.btnLoginView} onPress={() => { setLoginView('Register') }}>
                        <Text style={loginView == 'Register' ? styles.btnLabelLoginViewChoose : null}>Sign-up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {loginView === 'Login' ? <LoginCP styles={styles} /> : <RegisterCP styles={styles} />}
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    btnLabelLoginViewChoose: {
        color: 'white',
        fontWeight: 'bold'
    },
    btnLoginViewChoose: {
        paddingHorizontal: 65,
        paddingVertical: 10,
        borderColor: '#1A94FF',
        backgroundColor: '#1A94FF',
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    btnLoginView: {
        paddingHorizontal: 65,
        paddingVertical: 10,
        borderColor: 'gray',
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardContainer: {
        height: '30%',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 10,
        justifyContent: 'flex-end',

    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#f0f8ff'
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-around",
        marginTop: 10
    },
    btnText: {
        backgroundColor: 'red',
        textAlign: 'center',
        margin: 10,
        width: '40%',
        marginTop: 10,
        fontSize: 20,
        color: '#333'
    }
})