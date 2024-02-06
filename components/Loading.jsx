import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

export const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};
