import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "discoveredEndings";

export type DiscoveredEndings = Record<string, string[]>;

export async function getDiscoveredEndings(): Promise<DiscoveredEndings> {
  const storedValue = await AsyncStorage.getItem(STORAGE_KEY);

  if (!storedValue) {
    return {};
  }

  return JSON.parse(storedValue);
}

export async function saveDiscoveredEnding(storyId: string, endingId: string) {
  const current = await getDiscoveredEndings();

  const storyEndings = current[storyId] ?? [];

  if (storyEndings.includes(endingId)) {
    return;
  }

  const updated: DiscoveredEndings = {
    ...current,
    [storyId]: [...storyEndings, endingId],
  };

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
