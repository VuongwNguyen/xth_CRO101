import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toolbar from '../components/Toolbar'

const MenuScreen = () => {
    return (
        <View>
            <Toolbar leftControl={true} title='Delivery' />
            <View style={{ marginHorizontal: 16, marginVertical: 8,flexDirection:'row'}}>
                <Image style={{ width:50,height:40 }} source={require('../../assets/images/ImageShipping.png')} />
                <View>
                    <Text style={{ fontSize: 14, fontWeight: '400' }}>Delivery to</Text>
                    <Text style={{ fontSize: 14, fontWeight: '700' }}>Jl. Surya Sejahtera 20 A</Text>
                    <Text style={{ fontSize: 14, fontWeight: '400' }}>Quoc Vuong - 0123456789</Text>
                </View>
                <Image style={{ width:20,height:20,marginLeft:100,marginTop:10 }} source={require('../../assets/images/right_arrow.png')} />
            </View>
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({})