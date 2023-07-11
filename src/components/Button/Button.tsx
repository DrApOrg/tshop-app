import { FunctionComponent } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Color } from "../../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  disabled?: boolean;
  ghost?: boolean;
  title: string;
  onPress?: () => void;
  icon?: string;
  color?: string;
  height?: number;
}

const Button: FunctionComponent<Props> = ({
  ghost,
  disabled,
  title,
  onPress,
  icon,
  color,
  height,
}) => {
  const iconName = icon === "filter" ? "filter" : "swap-vertical";
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button_box,
        ghost && styles.ghostButton,
        height ? { height: height } : {},
        color ? { backgroundColor: color, flex: 1, height: 40 } : {},
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.button_text,
          ghost && {
            color: `${disabled ? "#9E9E9E" : "#101010"}`,
          },
        ]}
      >
        {title}
      </Text>
      {icon && (
        <MaterialCommunityIcons name={iconName} size={24} color={"black"} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ghostButton: {
    backgroundColor: "#EEEEEE",
  },
  button_box: {
    backgroundColor: Color.primary,
    width: "100%",
    height: 64,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
  },
  button_text: {
    fontWeight: "500",
    fontSize: 15,
  },
});

export default Button;
