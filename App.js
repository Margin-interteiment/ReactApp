import axios from "axios";
import {
  StatusBar,
  Alert,
  Text,
  Image,
  FlatList,
  View,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "./components/Post";
import React from "react";
import { HomeScreen } from "./screens/Home";
import { FullPostScreen } from "./screens/FullPost";
import { Navigation } from "./screens/Navigation";

export default function App() {
  return <Navigation />;
}
