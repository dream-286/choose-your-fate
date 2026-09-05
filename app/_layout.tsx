import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../constants/colors";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Tabs
        safeAreaInsets={{ bottom: 0 }}
        screenOptions={{
          headerShown: false,
          sceneStyle: { backgroundColor: colors.background },
          tabBarHideOnKeyboard: true,
          tabBarStyle: [
            styles.tabBar,
            {
              marginBottom: Math.max(insets.bottom, 12),
              marginLeft: Math.max(insets.left, 24),
              marginRight: Math.max(insets.right, 24),
            },
          ],
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarActiveBackgroundColor: colors.surfaceLight,
          tabBarItemStyle: styles.tabItem,
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: styles.tabLabel,
          tabBarIconStyle: styles.tabIcon,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "STORIES",
            tabBarAccessibilityLabel: "Stories",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "book" : "book-outline"}
                size={21}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="endings"
          options={{
            title: "FATES",
            tabBarAccessibilityLabel: "Fates",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "compass" : "compass-outline"}
                size={21}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="game"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabBar: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.border,
    borderTopColor: colors.border,
    borderRadius: 24,
    height: 76,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 0,
  },
  tabItem: {
    borderRadius: 17,
    marginHorizontal: 4,
    paddingVertical: 5,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 1.8,
    marginTop: 2,
  },
  tabIcon: {
    height: 26,
  },
});
