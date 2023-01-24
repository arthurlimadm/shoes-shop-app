import { ReactNode } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface IProps{
    image:any, 
    cost: string,
    children: string,
    onClick: ()=> void
}

export default function Shoes({image, cost, children, onClick}: IProps){

    

    return (<TouchableOpacity style={styles.container} onPress={onClick}>
            <Image 
                source={image}
                style={styles.image}
            />
            <Text style={styles.shoesText}>
                {children.length > 27 ? children : `${children.substring(0, 22)}...`}
            </Text>
            <View>
                <Text style={[styles.shoesText, {color: 'grey'}]}> {cost} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 175,
        height: 175
    },
    shoesText: {
        fontSize: 16
    }
})