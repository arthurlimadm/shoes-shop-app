import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import Banner from '../../assets/banner.png'
import { ScrollView } from "react-native-gesture-handler";
import Shoes from "../../components/Shoes";
import Tenis1 from '../../assets/1.png'
import Tenis2 from '../../assets/2.png'
import Tenis3 from '../../assets/3.png'
import Tenis4 from '../../assets/4.png'
import Tenis5 from '../../assets/5.png'
import Tenis6 from '../../assets/6.png'
import {useNavigation} from '@react-navigation/native'
import { RootStackParamList } from "../../routes";
import type { StackNavigationProp } from '@react-navigation/stack';

export default function Home(){

    type ScreenParams = StackNavigationProp<RootStackParamList>

    const {navigate} = useNavigation<ScreenParams>()

    return<View style={styles.container}>
        <View style={styles.header}>
            <Image source={Banner} style={styles.banner}/>
        </View>
        
        <View style={styles.textContainer}>
            <Text style={[styles.text]}>TÊNIS</Text>
            <Text style={[styles.text, {color: "#CECECF"}]}>•</Text>
            <Text style={[styles.text, {color: "#CECECF"}]}>MASCULINO</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                <MaterialIcons 
                    name="filter-list"
                    size={24}
                    color="#000"
                />
            </TouchableOpacity>

        </View>

        <View style={styles.line}/>

        <ScrollView>
            <Text style={[styles.text, {paddingLeft: 10}]}>LANÇAMENTOS</Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Shoes image={Tenis1} cost="$499,00" onClick={()=>  navigate('Detail')}>Nike Air Max</Shoes>
                <Shoes image={Tenis2} cost="$399,00" onClick={()=>  navigate('Detail')}>Nike Drownshifter 10</Shoes>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Shoes image={Tenis3} cost="$399,00" onClick={()=>  navigate('Detail')}>Nike Squiward Tentacles</Shoes>
                <Shoes image={Tenis4} cost="$285,00" onClick={()=>  navigate('Detail')}>Nike Epic Flyknit 2</Shoes>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Shoes image={Tenis5} cost="$130,00" onClick={()=>  navigate('Detail')}>Nike Joinride Run Flyknit</Shoes>
                <Shoes image={Tenis6} cost="$780,00" onClick={()=>  navigate('Detail')}>Nike Dunk SB</Shoes>
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    header: {
        marginBottom: 8
    },
    banner: {
        width: "100%",

    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHotrizontal: '51%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: "5%",
        marginHorizontal: '5%',
    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2
    }
})