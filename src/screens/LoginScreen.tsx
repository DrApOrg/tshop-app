import { View, StyleSheet, Text, Platform } from "react-native";
import { Button, Input, Toast } from "../components";
import { Error } from "../types/Error";
import { useCallback, useEffect, useState } from "react";
import * as Auth from "../services/Auth";
import { useAppDispatch } from "../redux/store";
import { authSlice } from "../redux/auth";
import { useNavigation } from "@react-navigation/native";
import { RoutePattern } from "../constants/routes";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<Error>({ body: "", state: false });
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleLoginUser = useCallback(() => {
    Auth.login({ email, password })
      .then((response) => {
        console.log(response);
        if (response.status < 400) {
          dispatch(authSlice.actions.setToken(response.data.code));
          dispatch(authSlice.actions.setUserState(response.data.user));
          navigation.navigate(RoutePattern.Account as never);
        } else {
          throw response;
        }
      })
      .catch((error) => {
        console.log(error);
        setError({
          body: error.message,
          state: true,
        });
      })
      .finally(() => {
        setTimeout(() => {
          setError({ body: "", state: false });
        }, 1000);
      });
  }, [email, password]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TSHOP </Text>
      <Input value={email} onChange={setEmail} label="Email *" />
      <Input
        value={password}
        isPassword
        onChange={setPassword}
        label="Contraseña *"
      />
      <Button title="Iniciar Session" onPress={handleLoginUser} />
      {error.state && <Toast title={"Error"} body={error.body} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: Platform.OS === "ios" ? 40 : 50,
    backgroundColor: "#fff",
    marginBottom: 200,
    gap: 20,
  },
  container_title: {
    width: "100%",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
});

export default LoginScreen;
