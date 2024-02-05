import axios from "axios";
import { StatusBar, Alert, Text, Image, View } from "react-native";
import { Post } from "./components/Post";
import React from "react";

export default function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://65bfe4ce25a83926ab95d269.mockapi.io/v1/react")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Помилка при отриманні рецепту!");
      });
  }, []);

  return (
    <View>
      {items.map((obj) => (
        <Post
          title={obj.title}
          createdAt={obj.createdAt}
          imageUrl={obj.imageUrl}
        />
      ))}

      <StatusBar style="auto" />
    </View>
  );
}
