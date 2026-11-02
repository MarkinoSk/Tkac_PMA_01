import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";


export default function App() {
  const [counter , setCounter]  = useState(0) 
  function onPressAdd(){
    setCounter(() => counter + 1 )
  }
  function onPressLower(){
    setCounter(() => counter - 1)
    
  }
  function Vynuluj(){
    setCounter(() => counter * 0)
  }

  console.log(counter == 0)
  return (
    <View style={styles.container}>
      <Text>Pocitadlo Objednavok</Text>
      <Text style = {[styles.cislo, counter >= 5 && styles.varovanieCislo] }>{counter} </Text>
      <View style={styles.tlacidla}>
        <Button title= "+"  onPress={onPressAdd}  />
        <Button title= "-"  onPress={onPressLower}  disabled = {counter === 0}   />
      </View>
      <View style = {styles.Vynuluj}>
        <Button title= "Vynuluj" onPress={Vynuluj}    />
      </View>
      {counter >= 5 &&  <Text>Dosiahnuty limit</Text>}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1500fc",
    alignItems: "center",
    justifyContent: "center",
  },
  tlacidla:{
    backgroundColor: "#00fb82",
    flexDirection: "row",
    margin: 20,
    gap: 12,
    padding: 15,
    
  },
  cislo:{
    fontWeight: "bold",
    fontSize: 60,
    
  },
  varovanieCislo:{
    color:"red"

  },


});
