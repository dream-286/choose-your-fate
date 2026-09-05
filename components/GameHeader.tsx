import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

type GameHeaderProps = {
  time: string;
  sceneNumber: number;
  totalScenes: number;
};

export default function GameHeader({
  time,
  sceneNumber,
  totalScenes,
}: GameHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>

      <Text style={styles.progress}>
        {sceneNumber} / {totalScenes}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  time: {
    color: colors.textMuted,
    fontSize: 13,
    letterSpacing: 3,
  },

  progress: {
    color: colors.textMuted,
    fontSize: 13,
    letterSpacing: 1,
  },
});
