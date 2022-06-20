import React from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";

import {COLORS, FONTS, SIZES, icons, GOOGLE_API_KEY} from "../constants"
import { Marker } from "react-native-svg";
import MapViewDirections from "react-native-maps-directions";

const OrderDelivery = ({ route, navigation }) => {

    const mapView = React.useRef()

    const [restaurant, setRestaurant] = React.useState(null)
    const [streetName, setStreetName] = React.useState("")
    const [fromLocation, setFromLocation] = React.useState(null)
    const [toLocation, setToLocation] = React.useState(null)
    const [region, setRegion] = React.useState(null)

    const [duration, setDuration] = React.useState(10)
    const [isReady, setIsReady] = React.useState(false)

    React.useEffect(() => {
        let {restaurant, currentLocation} = route.params;

        let fromLoc = currentLocation.gps
        let toLoc = restaurant.location
        let street = currentLocation.streetName

        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
            longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
        }

        setRestaurant(restaurant)
        setStreetName(street)
        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setRegion(mapRegion)
    }, [])

    function zoomIn() {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.longitudeDelta / 2,
            longitudeDelta: region.longitudeDelta / 2,
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    function zoomOut() {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.longitudeDelta * 2,
            longitudeDelta: region.longitudeDelta * 2,
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

  function renderMap() {
         /* const destinationMarker = () => (
            <Marker
                coordinate={toLocation}
            >
                <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.white
                    }}
                >
                    <View
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.primary
                        }}
                    >
                        <Image 
                           // source={icons.pin}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.white
                            }}
                        />

                    </View>
                </View>
            </Marker>
        )

        const carIcon = () => (
            <Marker
                coordinate={fromLocation}
                anchor={{ x: 0.5, y:0.5 }}
                flat={true}
                //rotation
            >
                <Image 
                    //source={icons.car}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
            </Marker>
        )
*/
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapView}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region} 
                    style={{ flex:1 }} 
                />
            </View>
        )
    }
    
    function renderDestinationHeader() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 0,
                    right: 0,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: SIZES.width * 0.95,
                        paddingVertical: SIZES.padding,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <Image 
                        source={icons.location}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: SIZES.padding
                        }}
                    />

                    <View style={{ flex: 1 }}>
                        <Text>{streetName}</Text>
                    </View>

                    <Text>{Math.ceil(duration)} min</Text>
                </View>
            </View>
        )
    }

    function renderDeliveryInfo() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View 
                    style={{
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding * 3,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Image 
                            source={restaurant?.courier.avatar}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25
                            }}
                        />
                        <View style={{ flex: 1, marginLeft: SIZES.padding}}>
                            <View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
                                <Text>{restaurant?.courier.name}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image 
                                        source={icons.ratings}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginRight: SIZES.padding
                                        }}
                                    />
                                    <Text>{restaurant?.rating}</Text>
                                </View>
                            </View>
                            <Text style={{ color: COLORS.darkgray}}>{restaurant?.name}</Text>
                        </View>
                    </View>

                    {/*Buttons*/}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding * 2,
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                //width: SIZES.width * 0.5 -SIZES.padding * 6,
                                marginRight: 10,
                                backgroundColor: COLORS.primary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={{ color: COLORS.white}}>Call</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                //width: SIZES.width * 0.5 -SIZES.padding * 6,
                                marginRight: 10,
                                backgroundColor: COLORS.secondary,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                           onPress={() => navigation.goBack()}
                        >
                            <Text style={{ color: COLORS.white}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    function renderButtons() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: SIZES.height * 0.35,
                    right: SIZES.padding * 2,
                    width: 60,
                    height: 130,
                    justifyContent: 'space-between'
                }}
            >
                {/* ZOOM IN */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomIn()}
                >
                    <Text>+</Text>
                </TouchableOpacity>
                {/* ZOOM OUT */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomOut()}
                >
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1}}>
            {renderMap()}
            {renderDestinationHeader()}
            {renderDeliveryInfo()}
            {renderButtons()}
        </View>
    )
}


export default OrderDelivery;