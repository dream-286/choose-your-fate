import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

type StoryTextProps = {
  text: string;
};

export default function StoryText({ text }: StoryTextProps) {
  const paragraphs = text.split("\n\n");

  return (
    <View>
      {paragraphs.map((paragraph, index) => (
        <Text
          key={index}
          style={[
            styles.text,
            index === paragraphs.length - 1 && styles.lastParagraph,
          ]}
        >
          {paragraph}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: 18,
    lineHeight: 29,
    letterSpacing: 0.2,
    marginBottom: 22,
  },

  lastParagraph: {
    marginBottom: 0,
  },
});
