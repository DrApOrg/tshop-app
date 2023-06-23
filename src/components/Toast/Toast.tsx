import { FunctionComponent } from "react"
import { 
  Text, 
  View,
  StyleSheet
} from "react-native"
import { Feather } from '@expo/vector-icons';
import Animated, {FadeInUp, FadeOut, FadeOutUp} from "react-native-reanimated";
import { Toast as ToastType } from "../../types/Toast";

const Toast: FunctionComponent<ToastType> = ({
  title,
  body,
}) => {
  return (
    <Animated.View
      entering={FadeInUp}
      exiting={FadeOutUp}
      style={styles.container}>
      <Feather  name="alert-circle" size={24} color="white" />
      <View
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </Animated.View>
  )
} 

const styles = StyleSheet.create({
  container: {
    top: -20,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: '#EF5350',
    position: 'absolute',
    borderRadius: 8,
    alignItems: 'center',
    gap: 10,
  },
  title: {
    color: "white",
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 18,
    marginBottom: 4
  },
  body: {
    fontSize: 16,
    color: "white"
  }
})

export default Toast