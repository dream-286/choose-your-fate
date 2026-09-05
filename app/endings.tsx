import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EndingCard from "../components/EndingCard";
import { colors } from "../constants/colors";
import { roomThatRemembers } from "../data/story";
import { getDiscoveredEndings } from "../utils/endingStorage";

export default function EndingsScreen() {
  const story = roomThatRemembers;
  const [discovered, setDiscovered] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      async function loadEndings() {
        const saved = await getDiscoveredEndings();

        setDiscovered(saved[story.id] ?? []);
      }

      loadEndings();
    }, [story.id]),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>YOUR FATES</Text>

        <Text style={styles.title}>Endings</Text>

        <Text style={styles.description}>
          Some stories have more than one way to end.
        </Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>DISCOVERED</Text>

            <Text style={styles.progressCount}>
              {discovered.length} / {story.endings.length}
            </Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        <View style={styles.list}>
          {story.endings.map((ending) => (
            <EndingCard
              key={ending.id}
              title={ending.title}
              discovered={discovered.includes(ending.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
  },

  eyebrow: {
    color: colors.textMuted,
    fontSize: 11,
    letterSpacing: 3,
    marginBottom: 8,
  },

  title: {
    color: colors.text,
    fontSize: 38,
    fontWeight: "600",
    marginBottom: 10,
  },

  description: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 32,
  },

  progressContainer: {
    marginBottom: 30,
  },

  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  progressLabel: {
    color: colors.textMuted,
    fontSize: 10,
    letterSpacing: 2,
  },

  progressCount: {
    color: colors.text,
    fontSize: 12,
  },

  progressTrack: {
    height: 3,
    backgroundColor: colors.surface,
    borderRadius: 3,
    overflow: "hidden",
  },

  progressFill: {
    width: "0%",
    height: "100%",
    backgroundColor: colors.text,
  },

  list: {
    gap: 2,
  },
});
