import { FunctionComponent } from "react";
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  findNodeHandle
} from "react-native"

const Input: FunctionComponent<Props> = ({
  label,
  value,
  onChange,
  onPress,
  isPassword = false
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={isPassword}
        onPressIn={onPress}
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  )
} 

interface Props {
  label: string;
  value: string;
  isPassword?: boolean;
  onChange?: (text: string) => void;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 12,
    height: 64,
    justifyContent: 'center',
    display: 'flex',
    paddingHorizontal: 15,
    gap: 2,
    backgroundColor: "#F5F5F5",
    color: "#9E9E9E",

    borderWidth: 0.5,
    borderColor: '#C7C7C7'
  },
  input: {
    width: '100%',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.5,
    padding: 0,
    margin: 0,
  },
  label: {
    color: "#9E9E9E",
    letterSpacing: 0.7
  }
})

export default Input