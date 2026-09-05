import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

type EndingCardProps = {
  title: string;
  discovered: boolean;
};

export default function EndingCard({ title, discovered }: EndingCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>{discovered ? "✓" : "?"}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{discovered ? title : "Unknown Fate"}</Text>

        <Text style={styles.status}>
          {discovered ? "Discovered" : "Not discovered"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: colors.surface,
  },

  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  iconText: {
    color: colors.text,
    fontSize: 16,
  },

  info: {
    flex: 1,
  },

  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },

  status: {
    color: colors.textMuted,
    fontSize: 12,
  },
});
