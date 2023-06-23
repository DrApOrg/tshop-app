import { FunctionComponent, useRef, useState } from "react"
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData
} from "react-native"

const PinInput: FunctionComponent<Props> = ({
  onChange,
  value,
  disabled,
  length
}) => {
  const inputRefs = useRef<Array<TextInput>>([])

  const onChangeValue = (text: string, index: number) => {
    const newValue = [...value];
    newValue[index] = text;
    onChange(newValue);
 }

  const handleChange = (text: string, index: number) => {
    onChangeValue(text, index)

    if(text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus()
    }
    return inputRefs?.current[index - 1]?.focus()
  }

  const handleBackspace = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    const { nativeEvent } = event
    if(nativeEvent.key === 'Backspace') {
      if(index !== length - 1) {
        handleChange('', index)
      }
    }
  }

  return (
    <View style={styles.container}>
      {[...new Array(length)].map((value, index)=> (
          <TextInput 
            ref={ref => {
              if(ref && !inputRefs.current.includes(ref)) {
                inputRefs.current = [...inputRefs.current, ref]
              }
            }}
            key={index} 
            maxLength={1}
            contextMenuHidden
            selectTextOnFocus
            style={styles.pinInput} 
            keyboardType="numeric"
            testID={`PinInput-${index}`}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={event => handleBackspace(event, index)}
          />
        ))
      }
    </View>
  )
}

interface Props {
  length: number;
  disabled?: boolean;
  value: Array<string>;
  onChange: (params: string[]) => void;
} 

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  pinInput: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#F5F5F5',
    width: 50,
    fontSize: 25,
    height: 60,
    textAlign: 'center',
    borderRadius: 12
  }
})

export default PinInput