import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {

    //Dummy Datas

    const initialCurrentLocation = {
        streetName: "Mostar",
        gps: {
            latitude: 43.34878679531539,
            longitude: 17.804803326137126
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Noodles",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons.fast_food,
        },
        {
            id: 4,
            name: "Salads",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Sushi",
            icon: icons.sushi,
        },
        {
            id: 9,
            name: "Dessert",
            icon: icons.donuts,
        },
        {
            id: 10,
            name: "Drinks",
            icon: icons.drink,
        },

    ]

    //price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "ByProgrammers Burger",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.burger_restaurant,
            duration:"30 - 45 min",
            location: {
                latitude: 43.237628,
                longitude: 17.832642,
            },
            courier: {
                avatar: images.avatar,
                name: "Marija"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger with Honey Mustard",
                    photo: images.burger_restaurant_2,
                    description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 3,
                    name: "Crispy Baked French Fries",
                    photo: images.baked_fries,
                    description: "Crispy Baked French Fries",
                    calories: 194,
                    price: 8
                }
            ]
        },
        {
            id: 2,
            name: "ByProgrammers Pizza",
            rating: 4.8,
            categories: [6],
            priceRating: expensive,
            photo: images.pizza,
            duration:"15 - 20 min",
            location: {
                latitude: 43.237628,
                longitude: 17.832642,
            },
            courier: {
                avatar: images.avatar,
                name: "Julia"
            },
            menu: [
                {
                    menuId: 4,
                    name: "Hawaiian Pizza",
                    photo: images.pizza,
                    description: "Canadian bacon, homemade pizza crust, pizza sauce",
                    calories: 250,
                    price: 15
                },
                {
                    menuId: 5,
                    name: "Tomato & Basil Pizza",
                    photo: images.pizza2,
                    description: "Fresh tomatoes,  aromatic basil pesto and melted baccon",
                    calories: 250,
                    price: 20
                },
                {
                    menuId: 6,
                    name: "Tomato Pasta",
                    photo: images.tomato_pasta,
                    description: "Pasta with fresh tomatoes",
                    calories: 100,
                    price: 8
                }
            ]
        },
        {
            id: 3,
            name: "ByProgrammers Sushi",
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.sushi,
            duration:"10 - 15 min",
            location: {
                latitude: 43.237628,
                longitude: 17.832642,
            },
            courier: {
                avatar: images.avatar,
                name: "Andrea"
            },
            menu: [
                {
                    menuId: 7,
                    name: "Sushi sets",
                    photo: images.sushi,
                    description: "Fresh salmon, sushi rice, fresh juicy avocado",
                    calories: 100,
                    price: 50
                },
            ]
        },
        {
            id: 4,
            name: "ByProgrammers Cuisine",
            rating: 4.8,
            categories: [2],
            priceRating: affordable,
            photo: images.noodle_soup,
            duration:"15 - 20 min",
            location: {
                latitude: 43.237628,
                longitude: 17.832642,
            },
            courier: {
                avatar: images.avatar,
                name: "Ana"
            },
            menu: [
                {
                    menuId: 8,
                    name: "Noodles",
                    photo: images.noodle,
                    description: "Noodles with char siu",
                    calories: 200,
                    price: 5
            },
                {
                    menuId: 9,
                    name: "Noodles",
                    photo: images.noodle2,
                    description: "Noodles with char siu mee",
                    calories: 200,
                    price: 10
            },       
        ]
    },
    {
        id: 5,
        name: "ByProgrammers Rice",
        rating: 4.8,
        categories: [1],
        priceRating: expensive,
        photo: images.rice_bowl,
        duration:"10 - 15 min",
        location: {
            latitude: 43.237628,
            longitude: 17.832642,
        },
        courier: {
            avatar: images.avatar,
            name: "Andrea"
        },
        menu: [
            {
                menuId: 10,
                name: "Rice sets",
                photo: images.rice_bowl,
                description: "Asian-style rice with vegetables",
                calories: 100,
                price: 50
            },
        ]
    }, 
    {
        id: 6,
        name: "ByProgrammers Hot Dogs",
        rating: 4.9,
        categories: [3],
        priceRating: expensive,
        photo: images.hot_dog,
        duration:"10 - 15 min",
        location: {
            latitude: 43.237628,
            longitude: 17.832642,
        },
        courier: {
            avatar: images.avatar,
            name: "Andrea"
        },
        menu: [
            {
                menuId: 11,
                name: "Hot Dog",
                photo: images.hot_dog,
                description: "Hot Dog with baked-fries",
                calories: 100,
                price: 50
            },
        ]
    }, 
    {
        id: 7,
        name: "ByProgrammers Sushi",
        rating: 4.8,
        categories: [4],
        priceRating: expensive,
        photo: images.salad,
        duration:"15 - 20 min",
        location: {
            latitude: 43.237628,
            longitude: 17.832642,
        },
        courier: {
            avatar: images.avatar,
            name: "Andrea"
        },
        menu: [
            {
                menuId: 12,
                name: "Salad",
                photo: images.salad,
                description: "Fresh salad",
                calories: 100,
                price: 50
            },
        ]
    }, 
    {
        id: 8,
        name: "ByProgrammers Desserts",
        rating: 4.8,
        categories: [9],
        priceRating: expensive,
        photo: images.dessert,
        duration:"10 - 15 min",
        location: {
            latitude: 43.237628,
            longitude: 17.832642,
        },
        courier: {
            avatar: images.avatar,
            name: "Andrea"
        },
        menu: [
            {
                menuId: 13,
                name: "Souffle",
                photo: images.dessert,
                description: "Chocolate souffle",
                calories: 500,
                price: 20
            },
        ]
    },    
]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setselectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentlocation] = React.useState(initialCurrentLocation)

    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes
            (category.id))

            setRestaurants(restaurantList)

            setselectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if(category.length > 0)
            return category[0].name
        
            return ""
    }
    
    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding *2,
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source={icons.location}
                        resizeMode="contain"
                        style={{
                            top: '100%',
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <View
                            style={{
                                top: '100%',
                                width: '70%',
                                height: "100%",
                                backgroundColor: COLORS.lightGray3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: SIZES.radius
                            }}
                        >
                            <Text>{currentLocation.streetName}</Text>
                        </View>
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding *2,
                        justifyContent: 'center'
                    }}
                >
                    <Image 
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            top: '100%',
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        width: 75,
                        height: 120,
                        borderRadius: 25,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                             borderRadius: 25,
                             alignItems: "center",
                             justifyContent: "center",
                             backgroundColor: (selectedCategory?.id == item.id) ? 
                             COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image 
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />

                    </View>
                    <Text
                        style={{
                            marginTop:SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? 
                            COLORS.white : COLORS.black,
                            textAlign:"center"
                        }}
                    >
                        {item.name}
                    </Text>

                </TouchableOpacity>
            )
        }

        return (
            <View style={{ top:'3%', padding: SIZES.padding * 2 }}>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2}}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({item}) => (
            <TouchableOpacity
                style={{marginBottom: SIZES.padding * 2}}
                //onPress -> navigate to Restaurant screen
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/*Image*/}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image 
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width:"100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/*Rating*/}
                    <Image 
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text>{item.rating}</Text>

                    {/*Categories*/}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{
                                            flexDirection: 'row'
                                        }}
                                        key={categoryId}
                                    >
                                        <Text>
                                        {getCategoryNameById(categoryId)}</Text>
                                        <Text style={{color: COLORS.darkgray}}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        color: (priceRating <= item.priceRating) ?
                                        COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList 
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;