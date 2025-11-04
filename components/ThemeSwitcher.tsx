import { Switch, View, Text } from "react-native";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 16 }}>
      <Text>Dark Mode</Text>
      <Switch value={theme === "dark"} onValueChange={toggleTheme} />
    </View>
  );
}