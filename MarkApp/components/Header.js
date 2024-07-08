import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import shoppingBag from "../assets/shoppingBag.png";
import Logo from "../assets/Logo.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useCart } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";
import SideMenu from './SideMenu';
import { useState } from "react";

const Header = () => {
    const { cartItems } = useCart();
    const cartItemCount = cartItems.length;

    const navigation = useNavigation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <View style={{ margin: 10 }}>
            <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} navigation={navigation} />
            <View style={styles.header}>
                <TouchableOpacity onPress={toggleMenu} style={styles.overlay}>
                    <Ionicons name={isMenuOpen ? "close-outline" : "menu-outline"} size={33} />
                </TouchableOpacity>
                <Image source={Logo} style={{ cursor: "pointer" }} />
                <View style={styles.rightIcons}>
                    <Ionicons name="search-outline" size={33} style={styles.icon} />
                    <TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
                        <Image source={shoppingBag} />
                        {cartItemCount > 0 && (
                            <View style={styles.cartItemCountContainer}>
                                <Text style={styles.cartItemCountText}>{cartItemCount}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.subHeader}>
                <Text style={{ fontSize: 25 }}>OUR STORY</Text>
                <View style={styles.subHeaderIcons}>
                    <View style={styles.iconBackground}>
                        <MaterialCommunityIcons name="format-list-checkbox" size={30} />
                    </View>
                    <View style={[styles.iconBackground, styles.iconMargin]}>
                        <MaterialCommunityIcons name="filter-variant" size={30} color="red" />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
    },
    rightIcons: {
        flexDirection: "row",
        marginRight: 10,
    },
    icon: {
        marginRight: 10,
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
    },
    subHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
    },
    subHeaderIcons: {
        flexDirection: "row",
    },
    overlay: {
        flex: 1,
        backfaceVisibility: 'visible'
      },
    iconBackground: {
        height: 50,
        width: 50,
        backgroundColor: "#D3D3D3",
        borderRadius: 50,
        padding: 10,
        opacity: 0.4,
    },
    iconMargin: {
        marginHorizontal: 10,
    },
});

export default Header;