import { Text, View } from "react-native";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTheme } from "@/context/ThemeContext";

export default function SettingsScreen() {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: theme === "dark" ? "#000" : "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: theme === "dark" ? "#fff" : "#000" }}>
        Settings
      </Text>
      <ThemeSwitcher />
    </View>
  );
}