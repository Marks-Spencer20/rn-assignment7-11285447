import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useCart } from "../context/CartContext";
//import SideMenu from "./Sidemenu";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import shoppingBag from "../assets/shoppingBag.png";
import Logo from "../assets/Logo.png";
//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


const ProductDetails = ({ route, navigation }) => {
    const { product } = route.params || {};
    const { addToCart, cartItems } = useCart();
    const cartItemCount = cartItems.length;
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleAddToCart = () => {
        addToCart(product);
    };



    return (
        <View style={styles.container}>
                <View style={{ margin: 10, zIndex: 1000 }}>
                {/* <SideMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} navigation={navigation}/> */}
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
                        <View>
                            <TouchableOpacity onPress={toggleMenu}>
                                <Ionicons name={isMenuOpen ? "close-outline" : "menu-outline"} size={33} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image source={Logo} style={{ cursor: "pointer" }} />
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: 10 }}>
                            <View style={{ marginRight: 10 }}>
                                <Ionicons name="search-outline" size={33} />
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
                                    <Image source={shoppingBag} />
                                    {cartItemCount > 0 ? (
                                        <View style={styles.cartItemCountContainer}>
                                            <Text style={styles.cartItemCountText}>{cartItemCount}</Text>

                                        </View>
                                    ) : (null)
                                    }

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Image source={{ uri: product.image }} style={styles.productImage} />
                    <Text style={styles.productName}>{product.title}</Text>
                    <Text style={styles.productDescription}>{product.description}</Text>
                    <Text style={styles.productPrice}>${product.price}</Text>
                    <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                        <Text style={styles.addToCartText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    cartItemCountContainer: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    cartItemCountText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    }
})
export default ProductDetails