import { View, StyleSheet, Platform, Text, Image } from "react-native";
import { Button } from "../../components";
import { useNavigation } from "@react-navigation/native";
import { useRedirectToAccount } from "../../hooks/useRedirectToAccount";
import { RoutePattern } from "../../constants/routes";
import { useAppSelector } from "../../redux/store";
import { useEffect } from "react";

const WelcomeScreen = () => {
  useRedirectToAccount();
  const navigation = useNavigation();
  const { user } = useAppSelector((state) => state.userState);

  const toSignUp = () => navigation.navigate(RoutePattern.StepOne as never);
  const toSignIn = () => navigation.navigate(RoutePattern.SingIn as never);

  return (
    <View style={styles.container}>
      <Text style={styles.titleView}>my account</Text>
      <View style={styles.container_subbox}>
        <Image source={require("../../assets/smiley.png")} />
        <Text style={styles.container_subbox_title}>Come on in</Text>
        <Text style={styles.container_subbox_subtitle}>
          view orders and update your details
        </Text>
      </View>
      <View style={styles.button}>
        <Button title="Inicia Sesión" onPress={toSignIn} />
        <Button title="Registrate con tu telefono" onPress={toSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    gap: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 30,
    marginHorizontal: 16,
    marginTop: Platform.OS === "ios" ? 70 : 50,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  titleView: {
    fontSize: 32,
    fontWeight: "bold",
  },
  container_subbox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  container_subbox_title: {
    marginBottom: 10,
    fontSize: 26,
    fontWeight: "bold",
  },
  container_subbox_subtitle: {
    letterSpacing: 0.7,
    color: "#9E9E9E",
  },
});

export default WelcomeScreen;
