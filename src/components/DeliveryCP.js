import { FlatList, Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const DELIVERY = [
    {
        id: 1,
        status: 'Delivered',
        date: '2020/01/01',
        time: '10:00:00',
        shop: '13 Han Thuyen, D.1, HCM city',
        address: '285 CMT8, D.10, HCM city',
        products: ['Capuchino', 'Smoky', 'Hambuger'],
        totalPrice: 344
    },
    {
        id: 2,
        status: 'Delivered',
        date: '2020/01/01',
        time: '10:00:00',
        shop: '13 Han Thuyen, D.1, HCM city',
        address: '285 CMT8, D.10, HCM city',
        products: ['Capuchino', 'Smoky', 'Hambuger'],
        totalPrice: 344
    },
    {
        id: 3,
        status: 'Delivery Failed',
        date: '2020/01/01',
        time: '10:00:00',
        shop: '13 Han Thuyen, D.1, HCM city',
        address: '285 CMT8, D.10, HCM city',
        products: ['Capuchino', 'Smoky', 'Hambuger'],
        totalPrice: 344
    }
]

const DeliveryCP = () => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.card}>
                <View style={styles.statusAndTime}>
                    <TouchableOpacity
                        style={[
                            styles.statusContainer,
                            item.status === 'Delivered' ? styles.statusContainerDelivery : styles.statusContainerDeliveryFailed]}>
                        <Text style={[
                            styles.statusText,
                            item.status === 'Delivered' ? styles.statusTextDelivery : styles.statusTextDeliveryFailed]}>
                            {item.status}
                        </Text>
                    </TouchableOpacity>
                    <Text>{item.date}, {item.time}</Text>
                </View>
                <View style={styles.addressInfoContainer}>
                    <View style={styles.addressContainer}>
                        <Image style={styles.icon} source={require('../../assets/images/icShop.png')} />
                        <Text style={styles.textAddress}>{item.shop}</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.addressContainer}>
                        <Image style={styles.icon} source={require('../../assets/images/icLocation.png')} />
                        <Text style={styles.textAddress}>{item.address}</Text>
                    </View>
                </View>
                <View style={styles.productsContainer}>
                    <Text style={styles.textAddress}>{item.products.join(', ')}</Text>
                    <Text style={styles.textTotalPrice}>{item.totalPrice}.000đ</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={DELIVERY}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default DeliveryCP

const styles = StyleSheet.create({
    productsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        height: 'auto',
        width: '100%'
    },
    textTotalPrice: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        fontStyle: 'normal',
        color: '#28282B',
        marginStart: 8
    },
    textAddress: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        fontStyle: 'normal',
        color: '#27272A'
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginEnd: 8
    },
    addressInfoContainer: {
        width: '100%',
        heght: 'auto',
        paddingVertical: 8
    },
    line: {
        borderColor: '#EBEBF0',
        borderTopWidth: 1,
        marginVertical: 8
    },
    statusTextDelivery: {
        color: '#00AB56'
    },
    statusTextDeliveryFailed: {
        color: '#FF424E'
    },
    statusText: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        fontStyle: 'normal'
    },
    statusContainerDeliveryFailed: {
        backgroundColor: '#FFF0F1'
    },
    statusContainerDelivery: {
        backgroundColor: '#EFFFF4'
    },
    statusContainer: {
        width: 'auto',
        height: 'auto',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 16
    },
    statusAndTime: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },
    card: {
        marginBottom: 12,
        padding: 16,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        height: 'auto'
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5fa',
        padding: 16
    }
})