import ChoiceButton from "@/components/ChoiceButton";
import { colors } from "@/constants/colors";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EndingScreen from "../components/EndingScreen";
import GameHeader from "../components/GameHeader";
import StoryText from "../components/StoryText";
import { Story } from "../types/story";
import { saveDiscoveredEnding } from "../utils/endingStorage";
import { getStoryById } from "../utils/storyUtils";

export default function GameScreen() {
  const params = useLocalSearchParams();

  const storyId = Array.isArray(params.storyId)
    ? params.storyId[0]
    : params.storyId;

  const story = storyId ? getStoryById(storyId) : undefined;

  if (!story) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.errorText}>Story not found.</Text>
      </SafeAreaView>
    );
  }

  return <StoryGame key={story.id} story={story} />;
}

function StoryGame({ story }: { story: Story }) {
  const [currentScene, setCurrentScene] = useState(story.startScene);

  const [visitedScenes, setVisitedScenes] = useState(1);

  const currentEnding = story.endings.find(
    (ending) => ending.id === currentScene,
  );

  useEffect(() => {
    if (!currentEnding) {
      return;
    }

    saveDiscoveredEnding(story.id, currentEnding.id);
  }, [story.id, currentEnding]);

  const scene = story.scenes[currentScene];

  if (!scene) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.errorText}>This scene could not be found.</Text>
          <Pressable
            accessibilityRole="button"
            style={styles.choiceButton}
            onPress={() => {
              setCurrentScene(story.startScene);
              setVisitedScenes(1);
            }}
          >
            <Text style={styles.choiceText}>Restart story</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <GameHeader
          time="03 : 17"
          sceneNumber={visitedScenes}
          totalScenes={7}
        />
        <StoryText text={scene.text} />

        <View style={styles.choices}>
          {currentEnding ? (
            <EndingScreen
              title={currentEnding.title}
              onRestart={() => {
                setCurrentScene(story.startScene);
                setVisitedScenes(1);
              }}
            />
          ) : (
            <View style={styles.choicesContainer}>
              {scene.choices.map((choice, index) => (
                <ChoiceButton
                  key={choice.text}
                  number={index + 1}
                  text={choice.text}
                  onPress={() => {
                    setCurrentScene(choice.next);
                    setVisitedScenes((count) => count + 1);
                  }}
                />
              ))}
            </View>
          )}
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
    paddingTop: 20,
    paddingBottom: 50,
  },

  storyContainer: {
    marginTop: 70,
  },

  choicesContainer: {
    marginTop: 60,
  },

  storyText: {
    color: "white",
    fontSize: 24,
    lineHeight: 36,
    marginBottom: 40,
  },

  choices: {
    gap: 12,
  },

  choiceButton: {
    backgroundColor: "#222",
    padding: 18,
    borderRadius: 12,
  },

  choiceText: {
    color: "white",
    fontSize: 16,
  },

  errorText: {
    color: colors.text,
    fontSize: 18,
  },
});
