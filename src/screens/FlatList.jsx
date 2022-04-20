import { Text, View, FlatList, StyleSheet } from "react-native";
import React from "react";

function FlatListDemo() {
  const list = [
    {
      index:'1',
        name: "ravi",
    },
    {
      index:'2',
        name: "yash",
    },
    {
      index:'3',
        name: "sagar",
    },
    {
      index:'4',
        name: "shailaja",
    },
  ];
  return (
      <FlatList //FlatList should have to be a unique key
          keyExtractor={(e) => { // this is for key
              return e.index
          }}
      data={list} //the data which you are wants to be render
      renderItem={(e) => { //this is the main props to be passes through FlatList
        return (
          <View>
            <Text style={styles.name}>{e.item.
            name}</Text>
          </View>
        );
      }}
    ></FlatList>
  );
}
const styles = StyleSheet.create({
  index:1,
    name: {
    color: "red",
    margin: 10,
  },
});
export default FlatListDemo;
