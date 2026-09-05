import { stories } from "../data/stories";

export function getStoryById(storyId: string) {
  return stories.find((story) => story.id === storyId);
}
