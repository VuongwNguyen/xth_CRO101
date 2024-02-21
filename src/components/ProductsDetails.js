import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { React, useState } from 'react'

const ProductsDetails = () => {

    const [dataSize, setDataSize] = useState(DATASIZE);
    const imageChoose = require('../../assets/images/circleChoose.png');
    const imageNotChoose = require('../../assets/images/circle.png');
    const [isChecked, setIsChecked] = useState(0)


    const renderSize = ({ item }) => {
        const { id, image_size, name_size, price } = item;
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={function () { setIsChecked(item.id) }}>
                        <Image
                            style={{ marginTop: 24 }}
                            source={isChecked == id ? imageChoose : imageNotChoose} />
                    </TouchableOpacity>
                    <Image
                        style={{ marginTop: 14, marginHorizontal: 8 }}
                        source={image_size} />
                    <Text style={{ fontSize: 14, fontWeight: 400, marginTop: 24 }}>{name_size}</Text>
                </View>
                <View>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 700,
                        marginTop: 25.5,
                        marginBottom: 20
                    }}>{price}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 12, paddingHorizontal: 15 }}>
                <TouchableOpacity>
                    <Image
                        source={require('../../assets/images/btnBack.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={{ marginTop: 18 }}
                        source={require('../../assets/images/close.png')} />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', width: "90%", borderRadius: 8 }}>
                        <View>
                            <View>
                                <Image
                                    style={{ width: "100%", height: 370 }}
                                    source={require('../../assets/images/imageProduct.png')} />
                            </View>

                            <View style={{ marginTop: 12, paddingHorizontal: 20, position: 'relative' }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 400
                                }}>Capuccino</Text>
                                <Text style={{
                                    fontSize: 14,
                                    fontWeight: 700,
                                    marginBottom: 8,
                                }}>69.000 ₫</Text>
                                <Image
                                    style={{ position: 'absolute', right: 40, top: 10 }}
                                    source={require('../../assets/images/heart.png')} />
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: '#808089',
                                    marginBottom: 16
                                }}>Dark, rich espresso lies in wait under a smoothed and stretched layer
                                    of thick milk foam. An alchemy of barista artistry and craft.</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 16 }}>
                    <View style={{ backgroundColor: 'white', width: "90%", borderRadius: 8 }}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={{
                                marginTop: 16, marginBottom: 8
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 700
                                }}>Size</Text>
                            </View>

                            <View>
                                <FlatList
                                    data={dataSize}
                                    renderItem={renderSize}
                                    keyExtractor={item => item.id} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 16 }}>
                    <View style={{ backgroundColor: 'white', width: "90%", borderRadius: 8 }}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={{
                                marginTop: 16, marginBottom: 8
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 700
                                }}>Topping <Text style={{ color: '#808089', fontSize: 14 }}>(maximum 2)</Text></Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{ marginTop: 24 }}
                                        source={require('../../assets/images/checkbox.png')} />
                                    <Image
                                        style={{ marginTop: 14, marginHorizontal: 8 }}
                                        source={require('../../assets/images/product3.png')} />
                                    <Text style={{ fontSize: 14, fontWeight: 400, marginTop: 24 }}>Espresso (1 shot)</Text>
                                </View>

                                <View>
                                    <Text style={{
                                        fontSize: 14,
                                        fontWeight: 700,
                                        marginTop: 25.5
                                    }}>+10.000 ₫</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 12 }}>
                    <View style={{ backgroundColor: 'white', width: "90%", borderRadius: 8, marginBottom: 16 }}>
                        <View style={{ paddingHorizontal: 20, marginVertical: 16 }}>
                            <TextInput
                                style={[styles.input, { position: 'relative' }]}
                                placeholder="Nhập ghi chú của bạn"
                            />

                            <Text style={{ fontSize: 12, fontWeight: 400, color: '#808089', position: 'absolute', bottom: 20, right: 55 }}>(0/100)</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={{ backgroundColor: 'white' }}>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', marginVertical: 8 }}>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/btnIncrease.png')} />
                        </TouchableOpacity>
                        <Text style={{ width: 40, height: 40, borderWidth: 1, borderColor: '#DDDDE3', fontSize: 16, fontWeight: 400, textAlign: 'center', paddingVertical: 8, marginHorizontal: 10 }}>2</Text>
                        <TouchableOpacity>
                            <Image
                                source={require('../../assets/images/btnDiminish.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: '90%', height: 56, backgroundColor: '#1A94FF', borderRadius: 20, marginVertical: 8 }}>
                        <Text style={{ fontSize: 16, fontWeight: 400, textAlign: 'center', color: 'white', paddingHorizontal: 12, paddingVertical: 15 }}>Add to cart - 138.000 ₫</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductsDetails

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f5f5fa'
    },

    input: {
        borderRadius: 4,
        height: 88,
        borderColor: '#DDDDE3',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
    },
})

var DATASIZE = [
    {
        "id": 1,
        "image_size": require('../../assets/images/product1.png'),
        "name_size": "Small",
        "price": "+0 ₫",
    },
    {
        "id": 2,
        "image_size": require('../../assets/images/product2.png'),
        "name_size": "Large",
        "price": "+10.000 ₫",
    }
]