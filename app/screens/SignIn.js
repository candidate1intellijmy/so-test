import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn, _values } from "../auth";

export default ({navigation}) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="SIGN IN">
      <FormLabel>Email</FormLabel>
      <FormInput 
        placeholder="Email address..." 
        onChangeText={(val) => _values.username = val}
      />
      <FormLabel>Password</FormLabel>
      <FormInput 
        secureTextEntry 
        placeholder="Password..." 
        onChangeText={(val) => _values.password = val}
      />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          onSignIn().then( (value) => {
            if(value == 1){
               navigation.navigate("SignedIn");
            } 
          })
          .catch(error => console.log(error)) 
        }}
      />
    </Card>
  </View>
);