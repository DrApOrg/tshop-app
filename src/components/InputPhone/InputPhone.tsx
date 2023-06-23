import { 
  View,
  StyleSheet,
  TextInput,
  Image
} from "react-native"
import { FunctionComponent } from "react"

const InputPhone: FunctionComponent<Props> = ({
  value,
  onChange
}) => {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/peru-flag.png')} style={styles.flag}/>
      <TextInput 
        value={value}
        keyboardType="numeric"
        onChangeText={onChange}
        style={styles.textInput}
        maxLength={9}
        placeholder="phone number"/>
    </View>
  )
}

interface Props {
  value: string;
  onChange: (param: string) => void;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 12,
    height: 60,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 10,
    backgroundColor: "#F5F5F5",
    color: "#9E9E9E",

    borderWidth: 1,
    borderColor: '#C7C7C7'
  },
  textInput: {
    width: '90%',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.5,
    textAlignVertical: 'center',
    padding: 0,
    margin: 0,
  },
  flag: {
    marginTop: 3,
    width: 22,
    height: 22
  }
})

export default InputPhone