import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { stories } from "../data/stories";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>STORIES</Text>

        <View style={styles.storyList}>
          {stories.map((story) => (
            <Pressable
              key={story.id}
              style={({ pressed }) => [
                styles.storyCard,
                pressed && styles.storyCardPressed,
              ]}
              onPress={() =>
                router.push({
                  pathname: "/game",
                  params: {
                    storyId: story.id,
                  },
                })
              }
            >
              <Text style={styles.storyTitle}>{story.title}</Text>

              <Text style={styles.storyDescription}>{story.description}</Text>

              <Text style={styles.play}>PLAY →</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 16,
  },

  subtitle: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
  },

  buttonText: {
    color: "#111",
    fontSize: 16,
    fontWeight: "600",
  },
  heading: {
    color: colors.textMuted,
    fontSize: 12,
    letterSpacing: 4,
    marginBottom: 32,
  },

  storyList: {
    width: "100%",
    gap: 20,
  },

  storyCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 24,
  },

  storyTitle: {
    color: colors.text,
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 10,
  },

  storyDescription: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 24,
  },

  play: {
    color: colors.accent,
    fontSize: 12,
    letterSpacing: 2,
  },

  storyCardPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
