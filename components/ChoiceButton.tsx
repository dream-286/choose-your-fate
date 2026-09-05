import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

type ChoiceButtonProps = {
  number: number;
  text: string;
  onPress: () => void;
};

export default function ChoiceButton({
  number,
  text,
  onPress,
}: ChoiceButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.number}>{String(number).padStart(2, "0")}</Text>

        <Text style={styles.text}>{text}</Text>
      </View>

      <View style={styles.line} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
  },

  number: {
    color: colors.textMuted,
    fontSize: 12,
    letterSpacing: 1,
    width: 36,
  },

  text: {
    color: colors.text,
    fontSize: 16,
  },

  line: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: 14,
  },
});
