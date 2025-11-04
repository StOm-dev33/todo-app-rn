import { useState } from "react";
import { TextInput, Button, View } from "react-native";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function TodoForm({ userId }: { userId: string }) {
  const [title, setTitle] = useState("");
  const addTodo = useMutation(api.todos.add);

  const handleAdd = () => {
    if (title.trim()) {
      addTodo({ title, userId });
      setTitle("");
    }
  };

  return (
    <View style={{ flexDirection: "row", padding: 16, gap: 8 }}>
      <TextInput
        placeholder="New todo..."
        value={title}
        onChangeText={setTitle}
        style={{ flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8 }}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}