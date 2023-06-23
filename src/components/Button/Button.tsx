import { FunctionComponent } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Color } from "../../utils/Colors";

const Button: FunctionComponent<Props> = ({ ghost, disabled, title, onPress }) => {
  return (
    <TouchableOpacity 
      disabled={disabled} 
      style={[styles.button_box, ghost && styles.ghostButton]} 
      onPress={onPress}
    >
      <Text style={[styles.button_text, ghost &&  {
        color: `${disabled ? '#9E9E9E' : '#101010'}`
      }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ghostButton: {
    backgroundColor: '#EEEEEE',
  },
  button_box: {
    backgroundColor: Color.primary,
    width: "100%",
    height: 64,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button_text: {
    fontWeight: "500",
    fontSize: 15,
  },
});

interface Props {
  disabled?: boolean;
  ghost?: boolean;
  title: string;
  onPress?: () => void;
}

export default Button;
