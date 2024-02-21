import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Toolbar = (props) => {
    const { title = '', leftControl = false, } = props;
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity><Image source={require('../../assets/images/back_arrow_left.png')} /></TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginLeft: 10 }}>{title}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity><Image source={require('../../assets/images/find_glass.png')}
                        style={{ marginRight: 8, width: 20, height: 20 }} /></TouchableOpacity>
                    {leftControl && 
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: '#0000000D',
                        padding: 8,
                        borderRadius: 20
                    }}>
                        <TouchableOpacity><Image source={require('../../assets/images/dot_dot_dot.png')} /></TouchableOpacity>
                        <View style={{ width: 1, backgroundColor: 'black', marginHorizontal: 10 }} />
                        <TouchableOpacity><Image source={require('../../assets/images/cancel_icon.png')} /></TouchableOpacity>
                    </View>}
                </View>

            </View>
        </View>
    )
}

export default Toolbar

const styles = StyleSheet.create({})