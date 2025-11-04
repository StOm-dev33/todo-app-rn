import { FlatList, Text, View } from "react-native";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import { useTheme } from "@/context/ThemeContext";

export default function HomeScreen() {
  const { theme } = useTheme();
  const todos = useQuery(api.todos.get, { userId: "user123" }) || [];

  return (
    <View style={{ flex: 1, backgroundColor: theme === "dark" ? "#000" : "#f9f9f9" }}>
      <TodoForm userId="user123" />
      <FlatList
        data={todos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <TodoItem todo={item} />}
        ListEmptyComponent={<Text style={{ textAlign: "center", padding: 20 }}>No todos yet</Text>}
      />
    </View>
  );
}