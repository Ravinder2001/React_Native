import react from "react";
import { Text, View, StyleSheet } from "react-native"
const Custom = ({data}) => {
    return (
        <View>
            <Text style={styles.text}>Hi {data.name}</Text>
            <Text style={styles.text}>{data.email}</Text>
            <Text style={styles.text}>{data.mobile}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        marginLeft: 40,
        fontSize: 20,
        color:"blue"
    }
})
export default Custom