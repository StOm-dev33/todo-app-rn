import { Text, View, TouchableOpacity } from "react-native";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/context/ThemeContext";

export default function TodoItem({ todo }: { todo: any }) {
  const toggle = useMutation(api.todos.toggle);
  const remove = useMutation(api.todos.remove);
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        borderBottomWidth: 1,
        borderColor: "#eee",
      }}
    >
      <TouchableOpacity onPress={() => toggle({ id: todo._id })}>
        <Text
          style={{
            textDecorationLine: todo.completed ? "line-through" : "none",
            color: theme === "dark" ? "#fff" : "#000",
          }}
        >
          {todo.title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => remove({ id: todo._id })}>
        <Text style={{ color: "red" }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}