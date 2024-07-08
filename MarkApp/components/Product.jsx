import { View, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import addCircle from "../assets/add_circle.png";
import { useCart } from '../context/CartContext';

const PRODUCTS = [
    {
        id: 1,
        name: 'Office Wear',
        description: 'Reversible Angora Cardigan',
        price: 150,
        image: require("../assets/dress1.png"),
    },
    {
        id: 2,
        name: 'Black',
        description: 'Reversible Angora Cardigan',
        price: 150,
        image: require("../assets/dress2.png"),
    },
    {
        id: 3,
        name: 'Church Wear',
        description: 'Reversible Angora Cardigan',
        price: 150,
        image: require("../assets/dress3.png"),
    },
    {
        id: 4,
        name: 'Lamerei',
        description: 'Reversible Angora Cardigan',
        price: 150,
        image: require("../assets/dress4.png"),
    },
    {
        id: 5,
        name: '21WN',
        description: 'Reversible Angora Cardigan',
        price: 150,
        image: require("../assets/dress5.png"),
    },
    {
        id: 6,
        nname: 'Lopo',
        description: 'Reversible Angora Cardigan',
        price: 150,
        image: require("../assets/dress6.png"),
    },
    {
        id: 7,
        name: '21WN',
        description: 'Reversible Angora Cardigan',
        price: 150,
        image: require("../assets/dress7.png"),
    },
    {
        id: 8,
        name: 'Lame',
        description: 'Reversible Angora Cardigan',
        price: 150,
        image: require("../assets/dress3.png"),
    },
    {
        id: 9,
        name: 'Linen Dress',
        description: 'A light and airy linen dress perfect for summer.',
        price: 150,
        image:require("../assets/dress9.png"),
    },
    {
        id: 10,
        name: 'Cotton Hoodie',
        description: 'A comfortable and stylish cotton hoodie.',
        price: 150,
        image: require("../assets/dress10.png"),
    },
    {
        id: 11,
        name: 'Wool Coat',
        description: 'A warm and elegant wool coat for cold weather.',
        price: 150,
        image: require("../assets/dress11.png"),
    },
    {
        id: 12,
        name: 'Fleece Jacket',
        description: 'A cozy and lightweight fleece jacket.',
        price: 150,
        image:require("../assets/dress12.png"),
    },
    {
        id: 13,
        name: 'Silk Blouse',
        description: 'A sophisticated silk blouse for special occasions.',
        price: 150,
        image: require("../assets/dress13.png"),
    },
    {
        id: 14,
        name: 'Leather Belt',
        description: 'A durable and stylish leather belt.',
        price: 150,
        image: require("../assets/dress14.png"),
    }
    
];

const ProductItem = ({ id, name, description, price, image }) => {

 const { addToCart } = useCart();

 const handleAddToCart = () => {
    addToCart({ id, name,  description, price, image })
 }

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={image} />
                <TouchableOpacity onPress={handleAddToCart} style={{ alignSelf: "flex-end", position: "absolute", top: 216, right: 13, fontSize: 30 }}>
                    <Image source={addCircle} />

                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    )
}


const Product = () => {
    return (
        <FlatList
            data={PRODUCTS}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) => (
                <ProductItem
                    id={item.id}
                    description={item.description}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                />
            )}
            scrollEnabled={false}
        />
    )
}
export default Product;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 20,
        alignContent: "center"
    },
    product: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 5,
        elevation: 2,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 5,
    },
    name: {
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 10,
    },

    description: {
        opacity: 0.7,
        fontSize: 16,
        marginTop: 6
    },

    price: {
        fontSize: 18,
        color: 'red',
        marginTop: 10,
        opacity: 0.8
    },
})