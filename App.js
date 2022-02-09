import { StatusBar } from "expo-status-bar";
import { createRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordInputRef = createRef();

  return (
    <View style={styles.container}>
      <Text>Fuck off</Text>
      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        autoFocus={true}
        blurOnSubmit={false}
        style={styles.textInput}
        onChangeText={setEmail}
        onEndEditing={() => passwordInputRef.current.focus()}
        value={email}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry={true}
        autoCapitalize="none"
        returnKeyType="go"
        style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        ref={passwordInputRef}
      />
      <Button title="Entrar" />
      <Button title="Facebook" />
      <Button title="Google" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 5,
    width: "87%",
  },
});
