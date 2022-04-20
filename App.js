import react from "react";
import { Text, View, StyleSheet } from "react-native";
import Custom from "./src/screens/CustomComp";
import FlatListDemo from "./src/screens/FlatList";
const App = () => {
  const data = {
    name: "Ravi",
    email: "rven@gmail.com",
    mobile: "0912183",
  };
  return (
    // <View>
    //   <Text style={styles.names}>Hii Ravinder</Text>
    //   <Text>
    //     <Custom data={data}></Custom>
    //   </Text>
    // </View>
    <FlatListDemo></FlatListDemo>
  );
};
const styles = StyleSheet.create({
  names: {
    textAlign: "center",
    margin: 30,
    fontSize:30
  },
});
export default App;
