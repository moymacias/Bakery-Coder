import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

import { signUp } from "../store/actions/auth.action";
import { useDispatch } from "react-redux";

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("nuevo@correo.com");
  const [password, setPassword] = useState("pass123456");

  const handleSignUp = () => {
    dispatch(signUp(email, password));
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior="padding"
      keyboardVerticalOffset={50}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Tu panaderia</Text>
        <Text style={styles.title}>Create account</Text>
        <View>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
        <View style={styles.footer}>
          <Button title="Registrarse" onPress={handleSignUp} />
          <Button title="Iniciar sesion" onPress={() => console.log("first")} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  container: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "white",
    height: "50%",
    padding: 12,
  },
  footer: {
    marginTop: 42,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
