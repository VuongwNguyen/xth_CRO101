import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'

const NewAddressCP = () => {

    const [city, setCity] = useState("");

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.backandlabel}>
                            <TouchableOpacity>
                                <Image
                                    styles={styles.imagetitle}
                                    source={require('../../assets/images/imagesxuong/btnback.png')} />
                            </TouchableOpacity>
                            <Text style={styles.labeltitle}>New address</Text>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/images/imagesxuong/close.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={styles.titlemain}>Address</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder='Lot number, street name' />
                        </View>

                        <View>
                            <Text style={styles.titlemain}>City</Text>
                        </View>

                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={city}
                                onValueChange={(itemValue) => {
                                    setCity(itemValue);
                                }}
                            >
                                {!city && <Picker.Item label="Select a city" value="" />}
                                <Picker.Item label="Phường Bến Thành" value="Phường Bến Thành" />
                                <Picker.Item label="Phường Bến Nghé" value="Phường Bến Nghé" />
                                <Picker.Item label="Phường Cô Giang" value="Phường Cô Giang" />
                            </Picker>
                        </View>

                        <View>
                            <Text style={styles.titlemain}>District</Text>
                        </View>

                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={city}
                                onValueChange={(itemValue) => {
                                    setCity(itemValue);
                                }}
                            >
                                {!city && <Picker.Item label="Select a city" value="" />}
                                <Picker.Item label="Phường Bến Thành" value="Phường Bến Thành" />
                                <Picker.Item label="Phường Bến Nghé" value="Phường Bến Nghé" />
                                <Picker.Item label="Phường Cô Giang" value="Phường Cô Giang" />
                            </Picker>
                        </View>

                        <View>
                            <Text style={styles.titlemain}>Ward</Text>
                        </View>

                        <View style={styles.pickerContainer}>
                            <Picker
                                style={styles.picker}
                                selectedValue={city}
                                onValueChange={(itemValue) => {
                                    setCity(itemValue);
                                }}
                            >
                                {!city && <Picker.Item label="Select a city" value="" />}
                                <Picker.Item label="Phường Bến Thành" value="Phường Bến Thành" />
                                <Picker.Item label="Phường Bến Nghé" value="Phường Bến Nghé" />
                                <Picker.Item label="Phường Cô Giang" value="Phường Cô Giang" />
                            </Picker>
                        </View>

                        <View>
                            <Text style={styles.titlemain}>Recipient’s name</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder='E.g Nguyen Van A' />
                        </View>

                        <View>
                            <Text style={styles.titlemain}>Recipient’s phone number</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder='10-digit phone number' />
                        </View>

                        <View style={styles.containercheckbox}>
                            <Image
                                source={require('../../assets/images/imagesxuong/checkbox.png')} />
                            <Text style={styles.textcheckbox}>Save to Tiki’s address book</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.containerToch}>
                    <TouchableOpacity
                        style={styles.touch}>
                        <Text style={styles.textsave}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default NewAddressCP

const styles = StyleSheet.create({
    containerToch: {
        padding: 20,
        width: '100%',
    },

    touch: {
        width: "100%",
        backgroundColor: "#1A94FF",
        height: 56,
        borderRadius: 20,
    },

    textsave: {
        fontSize: 16,
        textAlign: 'center',
        paddingVertical: 14,
        color: 'white'
    },

    containercheckbox: {
        marginTop: 16,
        flexDirection: 'row',
        marginBottom: 10
    },

    textcheckbox: {
        fontSize: 14,
        paddingVertical: 1.5,
        paddingHorizontal: 8
    },

    titlemain: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4
    },

    form: {
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 32,
        marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
    },

    input: {
        marginBottom: 16,
        width: '100%',
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
        borderRadius: 4
    },

    pickerContainer: {
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 16
    },

    picker: {
        width: '100%',
        height: 40,
        color: 'black'
    },

    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f5f5fa'
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
})