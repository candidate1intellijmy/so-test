import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn, onSignUp, _values } from "../auth";

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="SIGN UP">
      <FormLabel>Email</FormLabel>
      <FormInput 
        placeholder="Email address..."
        onChangeText={(val) => _values.username = val}
      />
      <FormLabel>Password</FormLabel>
      <FormInput 
        secureTextEntry placeholder="Password..."
        onChangeText={(val) => _values.password = val}
      />
      <FormLabel>Confirm Password</FormLabel>
      <FormInput secureTextEntry placeholder="Confirm Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => onSignUp()}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
    </Card>
  </View>
);
