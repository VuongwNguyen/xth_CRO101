import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const StatesAddressCP = () => {

    const [data, setData] = useState(DATA);

    const renderItem = ({ item }) => {
        const { address, name, phone } = item;
        return (
            <View style={styles.containerItem}>
                <View style={styles.addressandinfo}>
                    <Image
                        source={require('../../assets/images/imagesxuong/address.png')} />

                    <View>
                        <View>
                            <Text style={styles.address}>{address}</Text>
                        </View>

                        <View style={styles.nameandphone}>
                            <Text style={styles.name}>{name}</Text>
                            <Text> • </Text>
                            <Text style={styles.phone}>{phone}</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesxuong/edit.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backandlabel}>
                    <TouchableOpacity>
                        <Image
                            styles={styles.imagetitle}
                            source={require('../../assets/images/imagesxuong/btnback.png')} />
                    </TouchableOpacity>
                    <Text style={styles.labeltitle}>Deliver to</Text>
                </View>

                <View>
                    <TouchableOpacity>
                        <Image
                            source={require('../../assets/images/imagesxuong/close.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Saved places</Text>
            </View>

            <View>
                <FlatList
                    style={styles.flatlist}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.phone} />
            </View>

            <View style={styles.flatlist}>
                <TouchableOpacity>
                    <View style={styles.containerNewplace}>
                        <Image
                            source={require('../../assets/images/imagesxuong/plus.png')} />
                        <Text style={styles.addplace}>New place</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StatesAddressCP

const styles = StyleSheet.create({
    addplace: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        fontSize: 14,
        fontWeight: 'bold'
    },

    address: {
        paddingHorizontal: 8,
        fontSize: 14,
        fontWeight: 'bold'
    },

    name: {
        fontSize: 12
    },

    phone: {
        fontSize: 12
    },

    nameandphone: {
        paddingHorizontal: 8,
        flexDirection: 'row',
    },

    addressandinfo: {
        flexDirection: 'row'
    },

    flatlist: {
        paddingHorizontal: 16
    },

    containerItem: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 12,
        paddingHorizontal: 16,
        paddingVertical: 8
    },

    containerNewplace: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 12,
        paddingHorizontal: 16,
        paddingVertical: 8
    },

    label: {
        display: 'flex',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
        fontSize: 16,
        fontWeight: 'bold'
    },

    imagetitle: {
        marginTop: 10
    },

    backandlabel: {
        flexDirection: 'row'
    },

    labeltitle: {
        marginTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },

    header: {
        paddingHorizontal: 16,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 66,
        alignItems: 'center'
    },

    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#f5f5fa'
    }
})

var DATA = [
    {
        "address": "Q12, TPHCM",
        "name": "Bắc",
        "phone": "0378049162"
    },
    {
        "address": "Q1, TPHCM",
        "name": "Nam",
        "phone": "0372222222"
    }, {
        "address": "Q17, TPHCM",
        "name": "Đông",
        "phone": "0378333333"
    }, {
        "address": "Q18, TPHCM",
        "name": "Tây",
        "phone": "0378999999"
    }, {
        "address": "Bình Tân, TPHCM",
        "name": "Trung",
        "phone": "0378043434"
    },
]