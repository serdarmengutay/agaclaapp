import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView, { Marker, Callout, Circle, Polygon } from 'react-native-maps';



const Map = ( ) => {

    const [pin, setPin] = React.useState({
        latitude: 41.1821,
        longitude: 28.9799,
    })
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                {/* <Image
                    source={require('../assets//userphoto.jpg')}
                    style={styles.userphoto}
                /> */}
                <Text style={styles.sapling}>Fidan Dik</Text>

            </View>
            {/* Pick Location */}
            <View style={styles.pickLoc}>
                <Text style={styles.pickText}>Fidanınızı dikmek için bir dikim alanı seçin</Text>
            </View>


            {/* Map */}

            <View style={styles.mapWrapper}>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: 41.1821,
                        longitude: 28.9799,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    provider="google" >
                    <Marker coordinate={pin}
                        pinColor="red"
                        draggable={true}
                        onDragStart={(e) => {
                            console.log("Drag Start", e.nativeEvent.coordinates)
                        }}
                        onDragEnd={(e) => {
                            setPin({
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude
                            })
                        }}>

                        <Callout style={{ width: 200, height: 80, borderRadius: 100, backgroundColor: 'rgba(52, 52, 52, 0.8)' }} tooltip={true}>
                            <Text style={{ color: 'white', margin: 2 }}>Belirtilen alana fidanını dikmek üzeresin, Onaylıyor musun ?</Text>
                        </Callout>
                    </Marker>
                    <Circle center={pin} radius={100} />
                </MapView>
            </View>

            <View style={styles.pickedLoc}>
                <Text style={styles.titleLoc}>
                    Seçilen Alan
                </Text>

                <TextInput style={styles.locInput}
                    textAlign={'center'}
                />

                <TouchableOpacity>
                    <View style={styles.locButton}>
                        <FontAwesome5 name="arrow-circle-right" size={28} style={{ padding: 5 }} color={'#ffff'} />
                        <Text style={styles.textLoc}>Alanı seç ve devam et</Text>
                    </View>
                </TouchableOpacity>


            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    userphoto: {
        width: 47,
        height: 47,
        borderRadius: 67,
        marginRight: 60,
    },
    sapling: {
        color: '#729D39',
        fontFamily: "montserrat",
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: "center",
        marginRight: 130
    },
    pickLoc: {
        alignSelf: "center",
        height: 45,
        width: 200,
    },
    pickText: {
        margin: 5,
        color: 'black',
        textAlign: "center"
    },
    mapWrapper: {
        backgroundColor: 'gray',
        height: 400,
        marginTop: 30,
        marginHorizontal: 50,
        borderWidth: 2,
        borderColor: '#729D39',
        borderRadius: 50,
        overflow: 'hidden',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    pickedLoc: {
        alignItems: "center",
        flexDirection: 'column',
        padding: 70,
        bottom: 60,
        flex: 1,
        justifyContent: 'space-evenly',
    },
    locInput: {
        width: 330,
        height: 40,
        backgroundColor: '#FFFF',
        borderRadius: 10
    },
    titleLoc: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 18,
    },
    textLoc: {
        color: '#FFFF',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 18,
        textAlign: "center",
        padding: 10,
        justifyContent: 'center',
    },
    locButton: {
        width: 240,
        height: 40,
        borderRadius: 10,
        top: 10,
        flexDirection: "row-reverse",
        backgroundColor: '#D0D0D0',
    }
});
export default Map;