import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const RegisterCP = () => {
    const [eye, setEye] = useState(true)
    const [eye2, setEye2] = useState(true)
    const eyeImage = eye ? require('../../assets/images/eye.png') : require('../../assets/images/hidden.png')
    const eyeImage2 = eye2 ? require('../../assets/images/eye.png') : require('../../assets/images/hidden.png')
    return (
        <View style={{ paddingHorizontal: 20, }}>
            <View style={{ width: '100%', paddingVertical: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Register to continue ...</Text>
            </View>
            <View>
                <TextInput style={{ borderWidth: 0.5, borderRadius: 8, width: '100%', backgroundColor: '#cccccc', paddingHorizontal: 17, paddingVertical: 11 }} placeholderTextColor={'#1A94FF'} placeholder="Email address" />
            </View>
            <View style={{ marginVertical: 20 }}>
                <TextInput secureTextEntry={eye} style={{ borderWidth: 0.5, borderRadius: 8, width: '100%', backgroundColor: '#cccccc', paddingHorizontal: 17, paddingVertical: 11 }} placeholderTextColor={'#1A94FF'} placeholder="Password" />
                <TouchableOpacity style={{ position: 'absolute', top: 15, right: 15 }} onPress={() => { setEye(!eye) }}>
                    <Image style={{ height: 25, width: 25, }} source={eyeImage} />
                </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 20 }}>
                <TextInput secureTextEntry={eye2} style={{ borderWidth: 0.5, borderRadius: 8, width: '100%', backgroundColor: '#cccccc', paddingHorizontal: 17, paddingVertical: 11 }} placeholderTextColor={'#1A94FF'} placeholder="Re-Password" />
                <TouchableOpacity style={{ position: 'absolute', top: 15, right: 15 }} onPress={() => { setEye2(!eye2) }}>
                    <Image style={{ height: 25, width: 25, }} source={eyeImage2} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{ width: '100%', backgroundColor: '#1A94FF', paddingVertical: 15, alignItems: 'center', borderRadius: 30 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>Sign-up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 9, justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'white', paddingVertical: 15, alignItems: 'center', borderRadius: 30 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>sign up with google</Text>
                <Image style={{ position: 'absolute', height: 25, width: 25, top: 15, left: 15 }} source={require('../../assets/images/google.png')} />
            </TouchableOpacity>
            <View style={{ width: '100%', paddingVertical: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: '#1A94FF', textDecorationLine: 'underline' }}>Forgot password?</Text>
            </View>
        </View>
    )
}

export default RegisterCP