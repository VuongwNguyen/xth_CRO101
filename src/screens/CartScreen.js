import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const PRODUCTS = [
    {
        id: 1,
        name: 'Capuchino',
        size: 'small',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        img: require('../../assets/images/product1.png'),
        price: 344
    },
    {
        id: 2,
        name: 'Smoky burgers',
        size: 'medium',
        img: require('../../assets/images/product2.png'),
        price: 344
    },
    {
        id: 3,
        name: 'Hambuger',
        size: 'large',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        img: require('../../assets/images/product3.png'),
        price: 344
    }
]

const CartScreen = () => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={styles.container}>
                <Text style={styles.label}>Shipping details</Text>
                <View style={styles.shippingDetails}>
                    <View style={styles.cart}>
                        <Image style={styles.icon} source={require('../../assets/images/icShop.png')} />
                        <View style={styles.shop}>
                            <Text style={styles.text}>From store</Text>
                            <Text style={[styles.text, styles.shopText]}>13 Han Thuyen, D.1, HCM city</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.cart}>
                        <Image style={styles.icon} source={require('../../assets/images/icLocation.png')} />
                        <View style={styles.shop}>
                            <Text style={styles.text}>To</Text>
                            <Text style={[styles.text, styles.shopText]}>285 CMT8, D.10, HCM city</Text>
                            <Text style={styles.textCustomer}>Nick - 0969696969</Text>
                        </View>
                        <Image style={styles.arrow} source={require('../../assets/images/icArrow.png')} />
                    </View>
                </View>

                <Text style={styles.label}>Order details</Text>
                <View style={styles.shippingDetails}>
                    {PRODUCTS.map(function (product) {
                        return (
                            <View key={product.id} style={styles.card}>
                                <View style={styles.newCard}>
                                    <Image style={styles.icon} source={product.img} />
                                    <View style={styles.wrapper}>
                                        <View style={styles.shop}>
                                            <Text style={styles.label}>{product.name}</Text>
                                            <Text>Size: {product.size}</Text>
                                        </View>
                                        <Text style={styles.label}>{product.price}.000đ</Text>
                                        {
                                            product.content && <Text style={styles.textContent}>{product.content}</Text>
                                        }
                                        <View style={styles.quantityContainer}>
                                            <TouchableOpacity>
                                                <Image style={styles.icon2} source={require('../../assets/images/minus.png')} />
                                            </TouchableOpacity>
                                            <Text style={styles.quantity}>1</Text>
                                            <TouchableOpacity>
                                                <Image style={styles.icon2} source={require('../../assets/images/plus.png')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.line} />
                            </View>
                        )
                    })}

                    <View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Price</Text>
                            <Text style={styles.label}>344.000đ</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Shipping fee <Image source={require('../../assets/images/fee.png')} /></Text>
                            <Text style={styles.label}>15.000đ</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.pay}>
                <View style={styles.row}>
                    <Text style={styles.label}>
                        <Image source={require('../../assets/images/icCoupon.png')} />
                        {'\t Apply coupon'}
                    </Text>
                    <Image source={require('../../assets/images/icArrow.png')} />
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>Pay 344.000đ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    pay: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 'auto',
        padding: 16
    },
    btn: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A94FF',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    row: {
        flexDirection: 'row',
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    quantity: {
        width: 40,
        height: 40,
        padding: 8,
        textAlign: 'center',
        borderColor: '#DDDDE3',
        borderRadius: 4,
        borderWidth: 1,
        marginHorizontal: 4
    },
    icon2: {
        width: 40,
        height: 40
    },
    quantityContainer: {
        flexDirection: 'row',
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        marginVertical: 8
    },
    wrapper: {
        width: '100%',
        height: 'auto',
    },
    card: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
    },
    textContent: {
        padding: 8,
        color: '#DDDDE3',
        borderRadius: 4,
        borderWidth: 1,
        gap: 8,
        borderColor: '#DDDDE3',
        marginVertical: 4,
        width: '90%'
    },
    newCard: {
        flexDirection: 'row',
    },
    arrow: {
        width: 20,
        height: 20,
        alignSelf: 'center',
        position: 'absolute',
        end: 0
    },
    shippingDetails: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        paddingHorizontal: 16,
        marginVertical: 8,
        paddingVertical: 16,
    },
    textCustomer: {

    },
    line: {
        borderColor: '#EBEBF0',
        borderTopWidth: 1,
        width: '100%',
        alignSelf: 'center',
        marginVertical: 8
    },
    shopText: {
        fontWeight: '700',
        marginBottom: 2
    },
    text: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        fontStyle: 'normal',
        color: '#28282B'
    },
    shop: {
        flexDirection: 'column',
    },
    icon: {
        width: 20,
        height: 20,
        marginEnd: 8
    },
    cart: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    label: {
        color: '#27272A',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        fontStyle: 'normal',
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5fa'
    }
})