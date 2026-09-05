import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

type EndingScreenProps = {
  title: string;
  onRestart: () => void;
};

export default function EndingScreen({ title, onRestart }: EndingScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.endText}>THE STORY ENDS HERE</Text>

      <View style={styles.line} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>You discovered a different fate.</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onRestart}
      >
        <Text style={styles.buttonText}>PLAY AGAIN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 40,
  },

  endText: {
    color: colors.textMuted,
    fontSize: 11,
    letterSpacing: 4,
    marginBottom: 20,
  },

  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 40,
  },

  button: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 28,
  },

  buttonPressed: {
    opacity: 0.6,
  },

  buttonText: {
    color: colors.text,
    fontSize: 12,
    letterSpacing: 2,
  },
  line: {
    width: 50,
    height: 1,
    backgroundColor: colors.border,
    marginBottom: 25,
  },

  subtitle: {
    color: colors.textMuted,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 40,
  },
});
